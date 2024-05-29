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
  days: '00',
  hours: '00',
};
let selectedAudioQuality: number;

// Store
store.subscribe((value) => {
  selectedAudioQuality = value.audioQuality;
});

// Methods
const handleInputChange = (event: CustomEvent<{value: string, fieldLabel: string}>):void => {
  const { value, fieldLabel } = event.detail;
  calculationInput[fieldLabel] = value;
}

export const convertToHours = (days: number, hours: number):number => days * 24 + hours;

export const calculateTime = (input: CalculationInputObject):number => {
  const {days, hours} = input;

  const durationHours = convertToHours(Number(days), Number(hours));

  // Convert hours to seconds
  const durationSeconds = durationHours * 3600;

  // Convert bitrate to bits per second
  const bitrateBps = selectedAudioQuality * 1000;

  // Calculate data usage in megabytes
  const dataUsageMB = (durationSeconds * bitrateBps) / (8 * 1024 * 1024);

  // Convert data usage to gigabytes and round down to the nearest whole number
  const dataUsageGB = Math.ceil(dataUsageMB / 1024);
  console.log(dataUsageGB);

  return dataUsageGB;
}

const handleCalculation = (input: CalculationInputObject):void => {
  const resultValue = calculateTime(input);

  setResult(`${resultValue} GB`);
  setResultTitle('Heres how much data you need:');
}
</script>

<CalculatorTitle title="How much time you would like to listen for? I will tell you how much mobile data you need." />

<div class="calculate-data">
  <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
  <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} on:inputChange={handleInputChange} />
</div>
<Button
  buttonDisabled={Object.values(calculationInput).some(value => value === '' || value === null || value === undefined)}
  buttonText='Calculate'
  buttonHoverColor="red"
  on:click={() => handleCalculation(calculationInput)}
/>

<style lang="scss">
  .calculate-data {
    display: flex;
    justify-content: center;
  }
</style>
