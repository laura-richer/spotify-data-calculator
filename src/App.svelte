<script lang="ts">
  import Calculator from './components/calculator/Calculator.svelte';
  import Header from './components/Header.svelte';
  import SelectAudioQuality from './components/SelectAudioQuality.svelte';
  import SelectCalculatorType from './components/SelectCalculatorType.svelte';

  import './scss/global.scss';

  let audioQuality: number;
  let selectedCalculator: string;

  const handleSelectAudioQuality = (event: CustomEvent<number>) => audioQuality = event.detail;
  const handleSelectCalculatorType = (event: CustomEvent<string>) => selectedCalculator = event.detail;
  const handleReset = () => {
    audioQuality = 0;
    selectedCalculator = '';
  }
</script>

<div class="main">
	<div class="main__wrapper">
		<Header />

		<div class="main__container">
			<div class="main__block">
        <SelectCalculatorType on:selectCalculator={handleSelectCalculatorType} resetSelectedCalculator="{selectedCalculator}" />
			</div>

			<div class="main__block">
				<SelectAudioQuality on:selectAudioQuality={handleSelectAudioQuality} resetSelectedAudioQuality={audioQuality} />
			</div>

      {#if selectedCalculator}
        <Calculator audioQuality={audioQuality} calculatorType={selectedCalculator} on:reset={handleReset} />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
@use 'sass:math';
@import './scss/resources';

.main {
  height: 100%;
  background-color: var(--color-grey);

  &__wrapper {
    display: flex;
    width: 450px;
    max-width: 90%;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  &__container {
    @include border-inset;


    padding: $spacer * 2;
    border-width: math.div($spacer, 2);
    background: url(./assets/images/sweeper-grid.png) top left;
    text-align: center;
  }

  &__block {
    margin-bottom: $spacer * 4;
  }
}
</style>
