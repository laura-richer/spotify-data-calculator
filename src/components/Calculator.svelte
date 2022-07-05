<script lang="ts">
  import CalculateData from './CalculateData.svelte';
  import CalculateTime from './CalculateTime.svelte';

  // Props
  export let audioQuality: number;
  export let calculatorType: string;

  // Methods
  const handleDisplayResult = (event: CustomEvent<number>) => {
    console.log(event.detail);
  }
</script>

<div class="calculator" class:calculator--disabled={!audioQuality}>
  <svelte:component
    audioQuality={audioQuality}
    this={calculatorType === 'time' ? CalculateTime : CalculateData}
    on:result={handleDisplayResult}
  />
</div>

