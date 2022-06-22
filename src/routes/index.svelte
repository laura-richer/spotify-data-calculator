<script lang="ts">
  import '../scss/app.scss';

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
  <div class="main__container">
    <Header/>

    <div class="main__content">
      <div class="main__selectors main__section">
        <Button on:click={() => handleClick('data')} btnHoverColor="green" btnText={"Calculate Data"}/>
        <Button on:click={() => handleClick('time')} btnHoverColor="green" btnText={"Calculate Time"}/>
      </div>

      <div class="main__section">
        <SelectAudioQuality/>
      </div>

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
</div>
