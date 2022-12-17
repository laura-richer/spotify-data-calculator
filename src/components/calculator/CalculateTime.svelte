<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculatorTitle from './CalculatorTitle.svelte';
	import Button from '../Button.svelte';
	import Input from '../Input.svelte';

  interface CalculationInputObject {
    days: number;
    hours: number,
    minutes: number
  }

	// Props
  const dispatch = createEventDispatcher();
	export let audioQuality: number;

	// Variables
  const resultTitle = 'Heres how long you can listen for';
	const calculationInput:CalculationInputObject = {
    days: 0,
    hours: 0,
    minutes: 0,
  };
  let result: string;

	// Methods
  const handleInputChange = (event: CustomEvent<object>) => {
    const { value, fieldLabel } = event.detail;
    calculationInput[fieldLabel] = value;
  }

	const calculateTime = (input: CalculationInputObject) => {
    console.log(audioQuality);

    const {days, hours, minutes} = input
    result = `${days}, ${hours}, ${minutes}`;

    dispatch('hasResult', {value: result, title: resultTitle});
  }
</script>

<CalculatorTitle title="How much time you would like to listen for? I will tell you how much mobile data you need." />

<div class="calculate-time">
  <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
  <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
  <Input fieldLabel={'minutes'} fieldName={'Minutes'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
</div>

<Button
  buttonDisabled={Object.values(calculationInput).some(value => !value)}
  buttonText={'Calculate'}
  buttonHoverColor="red"
  on:click={() => calculateTime(calculationInput)}
/>

<style lang="scss">
  .calculate-time {
    display: flex;
    justify-content: center;
  }
</style>
