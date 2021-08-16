<template>
  <div class="roulette-start-button">
    <el-row>
      <custom-button :buttonType="buttonType" :onClickFn="onClickButton">{{
        started ? 'ストップ' : 'スタート'
      }}</custom-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
import CustomButton from '../atoms/CustomButton.vue';

@Component({
  components: {
    CustomButton,
  },
})
export default class RouletteStartButton extends Vue {
  public buttonType = 'primary';

  public started = false;

  @Emit()
  public startRoulette(): void {}

  @Emit()
  public stopRoulette(): void {}

  public onClickButton(): void {
    this.buttonType = !this.started ? 'danger' : 'primary';
    !this.started ? this.startRoulette() : this.stopRoulette();

    this.started = !this.started;
  }
}
</script>
