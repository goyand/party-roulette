<template>
  <div class="roulette-display">
    <div>
      {{ pickedMeesage }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { shuffle } from '../../utils/shuffle';

@Component
export default class RouletteDisplay extends Vue {
  public pickedMeesage = 'ルーレットを回してください';

  @Prop({ type: Boolean, default: false })
  public isStarted!: boolean;

  @Watch('isStarted', { immediate: true })
  public statusChanged() {
    if (this.isStarted) this.startShuffle();
  }

  public startShuffle() {
    const intervalId = setInterval(() => {
      this.pickedMeesage = shuffle();
      if (!this.isStarted) {
        clearInterval(intervalId);
      }
    }, 50);
  }
}
</script>
