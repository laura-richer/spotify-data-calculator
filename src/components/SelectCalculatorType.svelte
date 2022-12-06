<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  // Variables
  const dispatch = createEventDispatcher();
  const calculatorTypes: Array<string> = ['Time', 'Data'];
  let selectedCalculatorComponentName: string;
  let selectedCalculatorType: string;

  const handleSelectCalculatorType = (calculatorType: string) => {
    selectedCalculatorComponentName = `Calculate${calculatorType}`;
    selectedCalculatorType = calculatorType;

    dispatch('selectCalculator', selectedCalculatorComponentName);
};
</script>

<div class="select-calculator-type">
  {#each calculatorTypes as calculatorType}
    <Button
      on:click={() => handleSelectCalculatorType(calculatorType)}
      buttonActiveColor="green"
      buttonText={`Calculate ${calculatorType}`}
      active={calculatorType === selectedCalculatorType}
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


