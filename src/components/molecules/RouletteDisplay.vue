<template>
  <div>
    <span>{{ pickedMeesage }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class RouletteDisplay extends Vue {
  public pickedMeesage = '何が出るかな';

  @Prop({ type: Boolean, default: false })
  public isStarted!: boolean;

  @Watch('isStarted', { immediate: true })
  public statusChanged() {
    if (this.isStarted) this.startShuffle();
  }

  public startShuffle() {
    let counter = 0;
    const intervalId = setInterval(() => {
      this.shuffle();
      if (counter >= 10) {
        clearInterval(intervalId);
      }
      counter++;
    }, 100);
  }

  public shuffle() {
    const rand = this.getRankdomNumber();
    const messages = [
      'ありがとう',
      'さようなら',
      'こんにちは',
      '楽しかった',
      'こんばんは',
      'またね',
      'おはよう',
      'ごめんなさい',
      'また今度',
      'どうも',
    ];
    this.pickedMeesage = messages[rand];
  }

  public getRankdomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
</script>

<style></style>
