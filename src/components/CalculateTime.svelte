<script lang="ts">
  import Form from './Form.svelte';

  const timeIntro: string = 'Enter the amount of time you would like to listen for and I will tell you how much mobile data you need.';

  const handleCalculateTime = (event: CustomEvent<number>) => {
    const { detail } = event;
    console.log(detail);
  }
</script>

<Form on:calculateResult={handleCalculateTime} name={'calculateTime'} label={timeIntro}/>
