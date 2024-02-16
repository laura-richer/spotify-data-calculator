<script lang="ts">
import Button from '$lib/atoms/Button.svelte';

import { resetResult, setCalculatorType, store } from '$lib/store';

// Variables
const calculatorTypes = ['Time', 'Data'];

let selectedCalculatorType: string;

// Store
store.subscribe((value) => {
  selectedCalculatorType = value.calculatorType;
});

// Methods
const handleSelectCalculatorType = (type: string):void => {
  if (type === selectedCalculatorType) return;

  resetResult();
  setCalculatorType(type);
};
</script>

<div class="select-calculator-type">
  {#each calculatorTypes as type}
    <Button
      on:click={() => handleSelectCalculatorType(type)}
      buttonHoverColor="green"
      buttonText={`Calculate ${type}`}
      active={type === selectedCalculatorType}
    />
  {/each}
</div>

<style lang="scss">
.select-calculator-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>


