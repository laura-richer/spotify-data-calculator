<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculatorTitle from './CalculatorTitle.svelte';
	import Button from '../Button.svelte';
	import Input from '../Input.svelte';

  interface CalculationInputObject {
    [key: string]: string;
    days: string;
    hours: string;
    minutes: string;
  }

	// Props
  const dispatch = createEventDispatcher<{hasResult: { value: string, title: string }}>();
	export let audioQuality: number;

	// Variables
  const resultTitle = 'Heres how long you can listen for';
	const calculationInput: CalculationInputObject = {
    days: '00',
    hours: '00',
    minutes: '00',
  };
  let result: string;

	// Methods
  const handleInputChange = (event: CustomEvent<{value: string, fieldLabel: string}>) => {
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
  buttonDisabled={Object.values(calculationInput).some(value => value === '' || value === null || value === undefined)}
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
