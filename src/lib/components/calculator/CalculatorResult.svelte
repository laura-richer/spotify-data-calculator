<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';
  import Button from '$lib/atoms/Button.svelte';

  // props
  export let result: string | number;
  export let title: string;

  // Variables
  const dispatch = createEventDispatcher();
</script>

<CalculatorTitle title={title} />
<p class="result__value">{result}</p>
<Button
  buttonText={'Restart'}
  buttonHoverColor="red"
  on:click={() => dispatch('reset', true)}
/>
