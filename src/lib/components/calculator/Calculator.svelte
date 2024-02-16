<script lang="ts">
import CalculateData from '$lib/components/calculator/CalculateData.svelte';
import CalculateTime from '$lib/components/calculator/CalculateTime.svelte';
import CalculatorResult from '$lib/components/calculator/CalculatorResult.svelte';


import { store } from '$lib/store';

// Variables
let selectedCalculatorType: string;
let selectedAudioQuality: number;
let currentResult: string;

// Store
store.subscribe((value) => {
  selectedCalculatorType = value.calculatorType;
  selectedAudioQuality = value.audioQuality;
  currentResult = value.result;
});
</script>

<div class="calculator" class:calculator--disabled={!selectedAudioQuality}>
  <div class="calculator-element">
    <svelte:component
      this={selectedCalculatorType === 'Time' ? CalculateTime : CalculateData}
    />
  </div>

  {#if currentResult}
    <div class="calculator-element">
      <CalculatorResult />
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
