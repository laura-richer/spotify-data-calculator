<script lang="ts">
	import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import Input from '$lib/atoms/Input.svelte';

	import { store, setResult, setResultTitle } from '$lib/store';

	interface Duration {
		days: number;
		hours: number;
	}

	// Variables
	let selectedAudioQuality: number;
	let calculationInput: string;

	// Store
	store.subscribe((value) => {
		selectedAudioQuality = value.audioQuality;
	});

	// Methods
	const handleInputChange = (event: CustomEvent<{ value: string; fieldLabel: string }>) =>
		(calculationInput = event.detail.value);

	export const convertDataGbToBits = (data: number): number => data * 1024 * 1024 * 1024 * 8;
	export const calculateSecondsFromBits = (bits: number, audioQuality: number): number =>
		bits / (audioQuality * 1000);

	export const convertSecondsToDaysAndHours = (seconds: number): Duration => {
		const days = Math.floor(seconds / (3600 * 24));
		const hours = Math.floor((seconds % (3600 * 24)) / 3600);
		return { days, hours };
	};

	export const pluralize = (value: number, unit: string): string =>
		value === 1 ? unit : unit + 's';

	export const formatDuration = (duration: Duration): string => {
		const { days, hours } = duration;
		const daysText = days > 0 ? `${days} ${pluralize(days, 'day')} and ` : '';
		const hoursText = `${hours} ${pluralize(hours, 'hour')}`;
		return daysText + hoursText;
	};

	export const calculateDataNeeded = (input: string): string => {
		const dataBits = convertDataGbToBits(Number(input));
		const durationSeconds = calculateSecondsFromBits(dataBits, selectedAudioQuality);
		const durationDaysAndHours = convertSecondsToDaysAndHours(durationSeconds);
		const durationText = formatDuration(durationDaysAndHours);

		return durationText;
	};

	const handleCalculation = (input: string): void => {
		const resultValue = calculateDataNeeded(input);
		setResult(resultValue);
		setResultTitle('You can listen for...');
	};
</script>

<CalculatorTitle
	title="How much data you have left? I will tell you how long you can listen for."
/>
<Input
	fieldLabel={'gb'}
	fieldName={'GB'}
	fieldLabelPosition={'right'}
	on:inputChange={handleInputChange}
/>
<Button
	buttonDisabled={!calculationInput}
	buttonText="Calculate"
	buttonHoverColor="red"
	on:click={() => handleCalculation(calculationInput)}
/>
