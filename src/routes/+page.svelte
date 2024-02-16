<script lang="ts">
import Calculator from '$lib/components/calculator/Calculator.svelte';
import Header from '$lib/components/Header.svelte';
import SelectCalculatorType from '$lib/components/SelectCalculatorType.svelte';
import SelectAudioQuality from '$lib/components/SelectAudioQuality.svelte';

import { store } from '$lib/store';
import '$lib/scss/global.scss';

let selectedCalculatorType: string;

store.subscribe((value) => {
  selectedCalculatorType = value.calculatorType;
});
</script>

<div class="main">
	<div class="main__wrapper">
		<Header />
		<div class="main__container">
			<div class="main__block">
				<SelectAudioQuality />
			</div>

      <div class="main__block">
        <SelectCalculatorType />
			</div>
      {#if selectedCalculatorType}
        <Calculator />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
  @use 'sass:math';
  @import '../lib/scss/resources';

  .main {
    display: flex;
    min-height: 100%;
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
      background: url(../lib/assets/images/sweeper-grid.png) top left;
      text-align: center;
    }

    &__block {
      margin-bottom: $spacer * 4;
    }
  }
  </style>
