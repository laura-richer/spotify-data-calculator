<script lang="ts">
  import Form from './Form.svelte';

  const dataIntro: string = 'Enter the amount of mobile data you have left and I will tell you how long you can listen for';

  const handleCalculateData = (event: CustomEvent<number>) => {
    const { detail } = event;
    console.log(detail);
  }
</script>

<Form on:calculateResult={handleCalculateData} name={'calculateData'} label={dataIntro}/>

