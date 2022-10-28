<script type="ts">
  import Result from './Result.svelte';

  // Type declerations
  interface CalculatorTypeObject {
    title: string;
    resultTitle: string,
  }

  interface CalculatorCopyObject {
    CalculateTime: CalculatorTypeObject;
    CalculateData: CalculatorTypeObject;
  }

  // Props
  export let calculatorType: string;
  export let isActive = false;
  export let result: string;

  // Variables
  const calculatorCopy: CalculatorCopyObject = {
    CalculateTime: {
      title: 'How much time you would like to listen for? I will tell you how much mobile data you need.',
      resultTitle: 'Heres how long you can listen for',
    },
    CalculateData: {
      title: 'How much data you have left? I will tell you how long you can listen for.',
      resultTitle: 'Heres how much data you need',
    },
  };

  const calculatorTypeString = calculatorType;
  const calculatorTypeKey = calculatorTypeString as keyof CalculatorCopyObject;
  let showCalculator = true;

  const handleShowCalculator = (event: CustomEvent<boolean>) => {
    const { detail } = event;
    showCalculator = detail;
  };

  // Watchers
  $: if (result) {
    showCalculator = false;
  }
</script>

<div class="calculator" class:calculator--disabled={!isActive}>
  <span class="calculator__title">{calculatorCopy[calculatorTypeKey].title}</span>

  {#if showCalculator}
    <slot></slot>
  {:else}
    <Result on:handleReset={handleShowCalculator} result={result} title={calculatorCopy[calculatorTypeKey].resultTitle} />
  {/if}
</div>

<style lang="scss">
@import '../scss/resources';

.calculator {
  display: flex;
  flex-direction: column;
  padding: $spacer * 1.5;
  background-color: var(--color-grey);

  & > * {
    &:not(:last-child) {
      margin-bottom: $spacer * 1.5;
    }
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__title {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
