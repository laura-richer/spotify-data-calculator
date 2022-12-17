<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  // Props
  export let resetSelectedCalculator: string;

  // Variables
  const dispatch = createEventDispatcher();
  const calculatorTypes: Array<string> = ['Time', 'Data'];

  let selectedCalculatorComponentName: string;
  let selectedCalculatorType: string;


  // Methods
  const handleSelectCalculatorType = (calculatorType: string) => {
    selectedCalculatorComponentName = `Calculate${calculatorType}`;
    selectedCalculatorType = calculatorType;

    dispatch('selectCalculator', selectedCalculatorComponentName);
  };

  $: {
    if (!resetSelectedCalculator) {
      selectedCalculatorType = '';
    }
  }
</script>

<div class="select-calculator-type">
  {#each calculatorTypes as calculatorType}
    <Button
      on:click={() => handleSelectCalculatorType(calculatorType)}
      buttonHoverColor="green"
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


