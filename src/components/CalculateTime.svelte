<script lang="ts">
	import Button from './Button.svelte';
  import Calculator from './Calculator.svelte';
	import Input from './Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
	let days: string = '00';
	let hours: string = '00';
	let minutes: string = '00';
  let result: string;

	// Methods
	const calculateTime = (days: string, hours: string, minutes: string) => {
    result = `${days}, ${hours}, ${minutes}`;
	};
</script>

<Calculator isActive={audioQuality !== undefined} calculatorType='CalculateTime' result={result}>
  <div class="calculate-time">
    <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} />
    <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} />
    <Input fieldLabel={'minutes'} fieldName={'Minutes'} fieldDefaultValue={'00'} />
  </div>
  <Button
    btnText={'Calculate'}
    btnHoverColor="red"
    on:click={() => calculateTime(days, hours, minutes)}
  />
</Calculator>

<style lang="scss">
  .calculate-time {
    display: flex;
    justify-content: center;
  }
</style>
