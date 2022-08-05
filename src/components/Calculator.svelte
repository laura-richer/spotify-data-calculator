<script lang="ts">
	import Button from './Button.svelte';
	import CalculateData from './CalculateData.svelte';
	import CalculateTime from './CalculateTime.svelte';

	// Props
	export let audioQuality: number;
	export let calculatorType: string;

	// Data
	let result: string | null;

	// Methods
	const handleDisplayResult = (event: CustomEvent<number>) => {
		console.log(event.detail);
		result = '123';
	};
</script>

<div class="calculator" class:calculator--disabled={!audioQuality}>
	<span class="calculator__title">
		{calculatorType === 'time'
			? 'How much time you would like to listen for? I will tell you how much mobile data you need.'
			: 'How much data you have left? I will tell you how long you can listen for.'}
	</span>

	{#if !result}
		<svelte:component
			this={calculatorType === 'time' ? CalculateTime : CalculateData}
			{audioQuality}
			on:result={handleDisplayResult}
		/>
	{/if}

	{#if result}
		<div class="calculator__result">
			<span class="calculator__result-title">
				{calculatorType === 'time'
					? 'Heres how long you can listen for'
					: 'Heres how much data you need'}
			</span>
			<p>{result}</p>
			<Button
				btnText={'Restart'}
				btnHoverColor="red"
				on:click={() => {
					result = null;
				}}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../scss/resources';

	.calculator {
		display: flex;
		flex-direction: column;
		background-color: $grey;
		padding: $spacer * 1.5;

		& > * {
			&:not(:last-child) {
				margin-bottom: $spacer * 1.5;
			}
		}

		&__title {
			max-width: 300px;
			margin: 0 auto;
		}

		&--disabled {
			pointer-events: none;
			opacity: 0.5;
		}

		&__result {
			&-title {
				display: block;
				margin-bottom: $spacer;
			}
		}
	}
</style>
