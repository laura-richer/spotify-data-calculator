<script lang="ts">
import CalculateData from './components/CalculateData.vue';
import CalculateTime from './components/CalculateTime.vue';

export default {
  setup() {
    const handleClick = (calculatorType: string) => {
      console.log(calculatorType);
    }
  }
};
</script>

<template>
  <main>
    <div>
      <span @click="handleClick(1)">Calculate data</span>
      <span @click="handleClick('time')">Calculate time</span>
    </div>
    <CalculateData />
    <CalculateTime />
  </main>
</template>

<style lang="scss">
@import './scss/app.scss';
</style>
