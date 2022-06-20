<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Button from '../atoms/Button.svelte';

  export let label: string = 'Add form label';
  export let name: string;

  const dispatch = createEventDispatcher();
  let calculationInput: number;

</script>
<div>
  <label for={name}>{label}</label>
  <input id={name} name={name} bind:value={calculationInput} type="number" />
  <Button btnText={'Calculate'} on:click={() => {dispatch('calculateResult', calculationInput)}} />
</div>
