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
const handleInputChange = (event: CustomEvent<{value: string, fieldLabel: string}>) => calculationInput = event.detail.value;

export const pluralize = (value: number, unit: string):string => value === 1 ? unit : unit + "s";

export const formatDuration = (duration: Duration):string => {
  const { days, hours } = duration;
  const daysText = days > 0 ? `${days} ${pluralize(days, 'day')} and ` : '';
  const hoursText = `${hours} ${pluralize(hours, 'hour')}`;
  console.log(daysText + hoursText);
  return daysText + hoursText;
}

export const calculateData = (input: string):string => {
  // Convert data from gigabytes to bits
  const dataBits = Number(input) * 1024 * 1024 * 1024 * 8;

  // Calculate duration in seconds
  const durationSeconds = dataBits / (selectedAudioQuality * 1000);

  // Convert duration from seconds to days and hours
  const durationDays = Math.floor(durationSeconds / (3600 * 24));
  const durationHours = Math.floor((durationSeconds % (3600 * 24)) / 3600);

  // Format the text to output from the calculator
  const durationText = formatDuration({ days: durationDays, hours: durationHours });

  return durationText;
};

const handleCalculation = (input: string):void => {
  const resultValue = calculateData(input);
  setResult(resultValue);
  setResultTitle('You can listen for...');
};
</script>

<CalculatorTitle title="How much data you have left? I will tell you how long you can listen for." />
<Input fieldLabel={'gb'} fieldName={'GB'} fieldLabelPosition={'right'} on:inputChange={handleInputChange} />
<Button
  buttonDisabled={!calculationInput}
  buttonText='Calculate'
  buttonHoverColor="red"
  on:click={() => handleCalculation(calculationInput)}
/>
