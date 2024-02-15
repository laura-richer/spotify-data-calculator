<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculateData from '$lib/components/calculator/CalculateData.svelte';
  import CalculateTime from '$lib/components/calculator/CalculateTime.svelte';
  import CalculatorResult from '$lib/components/calculator/CalculatorResult.svelte';

  // Props
  export let audioQuality: number;
  export let calculatorType: string;

  // Variables
  const dispatch = createEventDispatcher();
  let result: string;
  let resultTitle: string;


  const handleShowResult = (event: CustomEvent<{value: string, title: string}>) => {
    const { value, title } = event.detail;
    console.log(title);
    result = value;
    resultTitle = title;
  };

  const handleReset = () => {
    result = '0';
    dispatch('reset', true);
  };

  // TODO set result to 0 on any interaction with the page apart from the form input
</script>

<div class="calculator" class:calculator--disabled={!audioQuality}>
  <div class="calculator-element">
    <svelte:component
      this={calculatorType === 'CalculateTime' ? CalculateTime : CalculateData}
      audioQuality={audioQuality}
      on:hasResult={handleShowResult}
    />
  </div>

  {#if result}
    <div class="calculator-element">
      <CalculatorResult title={resultTitle} result={result} on:reset={handleReset} />
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../../scss/resources';

  .calculator {
    display: flex;
    flex-direction: column;
    gap: $spacer * 3;
    padding: $spacer * 1.5;
    background-color: var(--color-grey);

    &-element {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $spacer;
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  </style>
