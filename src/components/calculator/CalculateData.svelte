<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import CalculatorTitle from './CalculatorTitle.svelte';
	import Button from '../Button.svelte';
	import Input from '../Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
  const dispatch = createEventDispatcher();
  const resultTitle = 'Heres how much data you need';
	let calculationInput: number;
  let result: string;

	// Methods
  const handleInputChange = (event: CustomEvent<object>) => calculationInput = event.detail.value;

	const calculateData = (input: number) => {
    console.log(input);
    console.log(audioQuality);

	  result = input ? input.toString() : '123';
    dispatch('hasResult', {value: result, title: resultTitle});
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
