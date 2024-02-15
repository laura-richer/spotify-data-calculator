<script lang="ts">
import { createEventDispatcher } from 'svelte';

import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';
import Button from '$lib/atoms/Button.svelte';
import Input from '$lib/atoms/Input.svelte';

// import ConvertGbToB from '$lib/utils/convert-gb-to-b';

// Props
export let audioQuality: number;

// Variables
const dispatch = createEventDispatcher<{hasResult: { value: string, title: string }}>();
const resultTitle = 'You can listen for...';
let calculationInput: string;

interface Duration {
    days: number;
    hours: number;
}

// Methods
const handleInputChange = (event: CustomEvent<{value: string, fieldLabel: string}>) => calculationInput = event.detail.value;

const pluralize = (value: number, unit: string): string => value === 1 ? unit : unit + "s";

const formatDuration = (duration: Duration): string => {
    const { days, hours } = duration;
    const daysText = days > 0 ? `${days} ${pluralize(days, 'day')} and ` : '';
    const hoursText = `${hours} ${pluralize(hours, 'hour')}`;
    return daysText + hoursText;
}

const calculateData = (input: string) => {
  // Convert data from gigabytes to bits
  const dataBits = Number(input) * 1024 * 1024 * 1024 * 8;

  // Calculate duration in seconds
  const durationSeconds = dataBits / (audioQuality * 1000);

  // Convert duration from seconds to days and hours
  const durationDays = Math.floor(durationSeconds / (3600 * 24));
  const durationHours = Math.floor((durationSeconds % (3600 * 24)) / 3600);

  // Format the text to output from the calculator
  const durationText = formatDuration({ days: durationDays, hours: durationHours });


  dispatch('hasResult', {value: durationText, title: resultTitle});
};
</script>

<CalculatorTitle title="How much data you have left? I will tell you how long you can listen for." />

<Input fieldLabel={'gb'} fieldName={'GB'} fieldLabelPosition={'right'} on:inputChange={handleInputChange} />

<Button
  buttonDisabled={!calculationInput}
  buttonText={'Calculate'}
  buttonHoverColor="red"
  on:click={() => calculateData(calculationInput)}
/>
