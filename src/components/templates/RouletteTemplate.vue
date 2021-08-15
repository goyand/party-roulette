<template>
  <div id="roulette-template">
    <!-- ここにスタートボタン -->
    <roulette-start-button @start-roulette="startRoulette" />
    <!-- ここに表示エリア -->
    <roulette-display :isStarted="isStarted" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RouletteStartButton from '../molecules/RouletteStartButton.vue';
import RouletteDisplay from '../molecules/RouletteDisplay.vue';

@Component({
  components: {
    RouletteStartButton,
    RouletteDisplay,
  },
})
export default class RouletteTemplate extends Vue {
  public isStarted = false;

  public startRoulette(): void {
    this.isStarted = true;
  }
}
</script>

<style></style>
