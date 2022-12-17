<script type="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculateData from './CalculateData.svelte';
  import CalculateTime from './CalculateTime.svelte';
  import CalculatorResult from './CalculatorResult.svelte';

  // Props
  export let audioQuality: number;
  export let calculatorType: string;

  // Variables
  const dispatch = createEventDispatcher();
  let result: number;
  let resultTitle: string;


  const handleShowResult = (event: CustomEvent<object>) => {
    const { value, title } = event.detail;

    result = value;
    resultTitle = title;
  };

  const handleReset = () => {
    result = 0;
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
    padding: $spacer * 1.5;
    background-color: var(--color-grey);

    &-element {
      margin-bottom: $spacer * 1.5;

      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      &:global {
        & > * {
          &:not(:last-child) {
            margin-bottom: $spacer * 1.5;
          }
        }
      }
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  </style>
