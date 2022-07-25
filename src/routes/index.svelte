<script lang="ts">
	import '../scss/global.scss';
	import Button from '../components/Button.svelte';
	import Calculator from '../components/Calculator.svelte';
	import SelectAudioQuality from '../components/StreamingQuality.svelte';
	import Header from '../components/Header.svelte';

	const calculatorTypes: Array<string> = ['time', 'data'];
	let selectedCalculator: string;
	let audioQuality: number;

	const handleSelectCalculatorType = (calculatorType: string) => {
		selectedCalculator = calculatorType;
	};

	const handleSelectAudioQuality = (event: CustomEvent<number>) => {
		const { detail } = event;
		audioQuality = detail;
	};
</script>

<div class="main">
	<div class="main__container">
		<Header />

		<div class="main__content">
			<div class="main__selectors main__section">
				{#each calculatorTypes as calculatorType}
					<Button
						on:click={() => handleSelectCalculatorType(calculatorType)}
						btnHoverColor="green"
						btnText={`Calculate ${calculatorType}`}
						active={calculatorType === selectedCalculator}
					/>
				{/each}
			</div>

			<div class="main__section">
				<SelectAudioQuality on:selectAudioQuality={handleSelectAudioQuality} />
			</div>

			{#if selectedCalculator}
				<Calculator {audioQuality} calculatorType={selectedCalculator} />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@import '../scss/resources';

	.main {
		height: 100%;
		background-color: $grey;

		&__container {
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 450px;
			max-width: 90%;
			margin: 0 auto;
		}

		&__content {
			@include border-inset;

			text-align: center;
			padding: $spacer * 2;
			background: url(../assets/images/sweeper-grid.png) top left;
			border-width: math.div($spacer, 2);
		}

		&__section {
			margin-bottom: $spacer * 4;
		}

		&__selectors {
			display: flex;
			justify-content: center;
			flex-direction: column;
		}
	}
</style>
