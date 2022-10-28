<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  // props
  export let result: string | number = '';
  export let title = '';

  // Variables
  const dispatch = createEventDispatcher();
</script>

<div class="result">
  <p class="result__title">{title}</p>
  <p class="result__value">{result}</p>
  <Button
    buttonText={'Restart'}
    buttonHoverColor="red"
    on:click={() => dispatch('handleReset', true)}
  />
</div>
