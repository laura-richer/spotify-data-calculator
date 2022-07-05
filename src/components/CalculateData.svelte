<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Button from '../atoms/Button.svelte';
  import Input from '../atoms/Input.svelte';

  // Props
  export let audioQuality: number;

  // Variables
  const dispatch = createEventDispatcher();
  const dataIntro: string = 'How much data you have left? I will tell you how long you can listen for.';
  let calculationInput: number;

  // Methods
  const calculateData = (input: number) => {
    console.log(input);
    console.log(audioQuality);
    dispatch('result', input);
  }
</script>

<span>{dataIntro}</span>
<Input fieldLabel={'gb'} fieldName={'GB'} fieldLabelPosition={'right'}/>
<Button btnText={'Calculate'} on:click={() => calculateData(calculationInput)}/>
