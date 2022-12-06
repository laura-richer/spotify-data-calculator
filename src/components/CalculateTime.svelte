<script lang="ts">
	import Button from './Button.svelte';
  import Calculator from './Calculator.svelte';
	import Input from './Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
	const days = '00';
	const hours = '00';
	const minutes = '00';
  let result: string;

	// Methods
	const calculateTime = (selectedDays: string, selectedHours: string, selectedMinutes: string) => result = `${selectedDays}, ${selectedHours}, ${selectedMinutes}`;

</script>

<Calculator isActive={audioQuality !== undefined} calculatorType='CalculateTime' result={result}>
  <div class="calculate-time">
    <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} />
    <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} />
    <Input fieldLabel={'minutes'} fieldName={'Minutes'} fieldDefaultValue={'00'} />
  </div>
  <Button
    buttonText={'Calculate'}
    buttonActiveColor="red"
    on:click={() => calculateTime(days, hours, minutes)}
  />
</Calculator>

<style lang="scss">
  .calculate-time {
    display: flex;
    justify-content: center;
  }
</style>
