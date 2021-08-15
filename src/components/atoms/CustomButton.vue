<template>
  <div class="custom-button">
    <el-button :type="buttonType" @click="onClick"><slot /></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomButton extends Vue {
  @Prop({ type: String, required: false })
  public readonly buttonType?: string;

  @Prop({ type: Function, required: true, default: () => {} })
  public readonly onClickFn!: () => void;

  public async onClick() {
    console.log('押された');
    this.onClickFn && (await this.onClickFn());
  }
}
</script>

<style></style>
