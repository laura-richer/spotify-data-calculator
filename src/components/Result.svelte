<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  // props
  export let result: string | number = '';
  export let title: string = '';

  // Variables
  const dispatch = createEventDispatcher();
</script>

<div class="result">
  <p class="result__title">{title}</p>
  <p class="result__value">{result}</p>
  <Button
    btnText={'Restart'}
    btnHoverColor="red"
    on:click={() => dispatch('handleReset', true)}
  />
</div>
