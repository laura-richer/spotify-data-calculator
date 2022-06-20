<script lang="ts">
  import '../scss/global.scss';

  import Button from '../atoms/Button.svelte';
  import CalculateData from '../components/CalculateData.svelte';
  import CalculateTime from '../components/CalculateTime.svelte';
  import SelectAudioQuality from '../components/SelectAudioQuality.svelte';
  import Header from '../components/Header.svelte';

  let showCalculator = 'data';

  const handleClick = (calculatorType: string) => {
    showCalculator = calculatorType;
  }
</script>

<div class="main">
  <Header/>

  <div class="main__container">
    <Button on:click={() => handleClick('data')} btnText={"Calculate Data"}/>
    <Button on:click={() => handleClick('time')} btnText={"Calculate Time"}/>

    <SelectAudioQuality/>

    <div>
      {#if showCalculator === 'data'}
        <CalculateData/>
      {/if}

      {#if showCalculator === 'time'}
        <CalculateTime/>
      {/if}
    </div>


  </div>
</div>

<style lang="scss">
  .main {
    &__container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 450px;
      max-width: 90%;
      margin: 0 auto;
    }
  }
</style>
