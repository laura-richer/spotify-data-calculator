<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import Input from '$lib/atoms/Input.svelte';

  interface CalculationInputObject {
    [key: string]: string;
    days: string;
    hours: string;
  }

	// Props
  const dispatch = createEventDispatcher<{hasResult: { value: string, title: string }}>();
	export let audioQuality: number;

	// Variables
  const resultTitle = 'Heres how much data you need';
	const calculationInput: CalculationInputObject = {
    days: '00',
    hours: '00',
  };

	// Methods
  const handleInputChange = (event: CustomEvent<{value: string, fieldLabel: string}>) => {
    const { value, fieldLabel } = event.detail;
    calculationInput[fieldLabel] = value;
  }

  const convertToHours = (days: number, hours: number): number => days * 24 + hours;


	const calculateTime = (input: CalculationInputObject) => {
    const {days, hours} = input;

    const durationHours = convertToHours(Number(days), Number(hours));

    // Convert hours to seconds
    const durationSeconds = durationHours * 3600;

    // Convert bitrate to bits per second
    const bitrateBps = audioQuality * 1000;

    // Calculate data usage in megabytes
    const dataUsageMB = (durationSeconds * bitrateBps) / (8 * 1024 * 1024);

   // Convert data usage to gigabytes and round down to the nearest whole number
   const dataUsageGB = Math.ceil(dataUsageMB / 1024);

    dispatch('hasResult', {value: dataUsageGB.toString(), title: resultTitle});
  }
</script>

<CalculatorTitle title="How much time you would like to listen for? I will tell you how much mobile data you need." />

<div class="calculate-time">
  <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
  <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
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
