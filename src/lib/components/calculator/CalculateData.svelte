<script lang="ts">
	import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import Input from '$lib/atoms/Input.svelte';

	import { setResult, setResultTitle, store } from '$lib/store';

	interface CalculationInputObject {
		[key: string]: string;
		days: string;
		hours: string;
	}

	// Variables
	const calculationInput: CalculationInputObject = {
		days: '',
		hours: ''
	};
	let selectedAudioQuality: number;

	// Store
	store.subscribe((value) => {
		selectedAudioQuality = value.audioQuality;
	});

	// Methods
	const handleInputChange = (event: CustomEvent<{ value: string; fieldLabel: string }>): void => {
		const { value, fieldLabel } = event.detail;
		calculationInput[fieldLabel] = value;
	};

	export const convertInputToHours = (days: number, hours: number): number => days * 24 + hours;
	export const convertHoursToSeconds = (durationHours: number): number => durationHours * 3600;
	export const convertBitrateToBps = (audioQuality: number): number => audioQuality * 1000;
	export const calculateDataUsageInMb = (durationSeconds: number, bitrateBps: number): number =>
		(durationSeconds * bitrateBps) / (8 * 1024 * 1024);
	export const convertDataMbToGb = (dataUsageMB: number): number => Math.ceil(dataUsageMB / 1024);

	export const calculateDataNeeded = (input: CalculationInputObject): number => {
		const { days, hours } = input;

		const durationHours = convertInputToHours(Number(days), Number(hours));
		const durationSeconds = convertHoursToSeconds(durationHours);
		const bitrateBps = convertBitrateToBps(selectedAudioQuality);
		const dataUsageMB = calculateDataUsageInMb(durationSeconds, bitrateBps);
		const dataUsageGB = convertDataMbToGb(dataUsageMB);

		return dataUsageGB;
	};

	const handleCalculation = (input: CalculationInputObject): void => {
		const resultValue = calculateDataNeeded(input);

		setResult(`${resultValue} GB`);
		setResultTitle('Heres how much data you need:');
	};
</script>

<CalculatorTitle
	title="How much time you would like to listen for? I will tell you how much mobile data you need."
/>

<div class="calculate-data">
	<Input
		fieldLabel={'days'}
		fieldName={'Days'}
		fieldDefaultValue={'00'}
		on:inputChange={handleInputChange}
	/>
	<Input
		fieldLabel={'hours'}
		fieldName={'Hours'}
		fieldDefaultValue={'00'}
		on:inputChange={handleInputChange}
	/>
</div>
<Button
	buttonDisabled={Object.values(calculationInput).some(
		(value) => value === '' || value === null || value === undefined
	)}
	buttonText={'Calculate'}
	buttonHoverColor="red"
	on:click={() => handleCalculation(calculationInput)}
/>

<style lang="scss">
	.calculate-data {
		display: flex;
		justify-content: center;
	}
</style>
