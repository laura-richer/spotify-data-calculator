<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Button from './Button.svelte';
	import Input from './Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
	const dispatch = createEventDispatcher();
	let calculationInput: number;

	// Methods
	const calculateData = (input: number) => {
		console.log(input);
		console.log(audioQuality);
		dispatch('result', input);
	};
</script>

<Input fieldLabel={'gb'} fieldName={'GB'} fieldLabelPosition={'right'} />
<Button
	btnText={'Calculate'}
	btnHoverColor="red"
	on:click={() => calculateData(calculationInput)}
/>
