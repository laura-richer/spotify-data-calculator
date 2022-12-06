<script lang="ts">
	import Button from './Button.svelte';
  import Calculator from './Calculator.svelte';
	import Input from './Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
	let calculationInput: number;
  let result: string;

	// Methods
	const calculateData = (input: number) => {
	  result = input ? input.toString() : '123';
	};
</script>

<Calculator isActive={audioQuality !== undefined} calculatorType='CalculateData' result={result}>
  <Input fieldLabel={'gb'} fieldName={'GB'} fieldLabelPosition={'right'} />
  <Button
    buttonText={'Calculate'}
    buttonActiveColor="red"
    on:click={() => calculateData(calculationInput)}
  />
</Calculator>
