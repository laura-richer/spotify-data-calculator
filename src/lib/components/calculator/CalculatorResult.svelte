<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';

	import { store, resetCalculator } from '$lib/store';

	// Variables
	let currentResult: string;
	let currentResultTitle: string;

	// Store
	store.subscribe((value) => {
		currentResult = value.result;
		currentResultTitle = value.resultTitle;
	});
</script>

<CalculatorTitle title={currentResultTitle} />
<p class="result__value">{currentResult}</p>
<Button buttonText={'Restart'} buttonHoverColor="red" on:click={() => resetCalculator()} />

<style lang="scss">
	.result {
		&__value {
			margin-bottom: 0;
		}
	}
</style>
