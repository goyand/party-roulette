<template>
  <div class="roulette">
    <roulette-template />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RouletteTemplate from '../components/templates/RouletteTemplate.vue';

@Component({
  components: {
    RouletteTemplate,
  },
})
export default class Home extends Vue {}
</script>
