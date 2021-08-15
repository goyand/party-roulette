<template>
  <div class="roulette-start-button">
    <el-row>
      <custom-button :buttonType="'primary'" :onClickFn="onClickButton">押す</custom-button>
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
  @Emit()
  public startRoulette(): void {}

  public onClickButton(): void {
    console.log('さらに押された');
    this.startRoulette();
  }
}
</script>

<style></style>
