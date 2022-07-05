<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../atoms/Button.svelte';
  import Input from '../atoms/Input.svelte';

  // Props
  export let audioQuality: number;

  // Variables
  const dispatch = createEventDispatcher();
  const timeIntro: string = 'How much time you would like to listen for? I will tell you how much mobile data you need.';
  let days: string = '00';
  let hours: string = '00';
  let minutes: string = '00';

  // Methods
  const calculateTime = (days: string, hours: string, minutes: string) => {
    console.log(audioQuality);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    dispatch('result', `${days}, ${hours}, ${minutes}`);
  }
</script>

<span>{timeIntro}</span>
<div>
  <Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'}/>
  <Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'}/>
  <Input fieldLabel={'minutes'} fieldName={'Minutes'} fieldDefaultValue={'00'}/>
</div>
<Button btnText={'Calculate'} on:click={() => calculateTime(days, hours, minutes)}/>

