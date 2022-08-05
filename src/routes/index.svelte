<script lang="ts">
  import CalculateData from '../components/CalculateData.svelte';
	import CalculateTime from '../components/CalculateTime.svelte';
  import Header from '../components/Header.svelte';
	import SelectAudioQuality from '../components/SelectAudioQuality.svelte';
  import SelectCalculatorType from '../components/SelectCalculatorType.svelte';

  import '../scss/global.scss';

	let audioQuality: number;
  let selectedCalculator: string;

  const handleSelectAudioQuality = (event: CustomEvent<number>) => audioQuality = event.detail;
  const handleSelectCalculatorType = (event: CustomEvent<string>) => selectedCalculator = event.detail;
</script>

<div class="main">
	<div class="main__wrapper">
		<Header />

		<div class="main__container">
			<div class="main__block">
        <SelectCalculatorType on:selectCalculator={handleSelectCalculatorType} />
			</div>

			<div class="main__block">
				<SelectAudioQuality on:selectAudioQuality={handleSelectAudioQuality} />
			</div>

      {#if selectedCalculator}
        <svelte:component
          this={selectedCalculator === 'CalculateTime' ? CalculateTime : CalculateData}
          audioQuality={audioQuality}
        />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
@use 'sass:math';
@import '../scss/resources';

.main {
	height: 100%;
	background-color: var(--color-grey);

	&__wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 450px;
		max-width: 90%;
		margin: 0 auto;
	}

	&__container {
		@include border-inset;

		text-align: center;
		padding: $spacer * 2;
		background: url(../assets/images/sweeper-grid.png) top left;
		border-width: math.div($spacer, 2);
	}

	&__block {
		margin-bottom: $spacer * 4;
	}
}
</style>
