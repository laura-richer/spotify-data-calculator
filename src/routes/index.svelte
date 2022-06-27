<script lang="ts">
  import '../scss/app.scss';

  import Button from '../atoms/Button.svelte';
  import CalculateData from '../components/CalculateData.svelte';
  import CalculateTime from '../components/CalculateTime.svelte';
  import SelectAudioQuality from '../components/SelectAudioQuality.svelte';
  import Header from '../components/Header.svelte';

  const calculatorTypes: Array<string> = [
    'time',
    'data'
  ];
  let showCalculator: string;
  let audioQuality: number;

  const handleClick = (calculatorType: string) => {
    showCalculator = calculatorType;
  }

  const handleSelectAudioQuality = (event: CustomEvent<number>) => {
    const { detail } = event;
    audioQuality = detail;
  }
</script>

<div class="main">
  <div class="main__container">
    <Header/>

    <div class="main__content">
      <div class="main__selectors main__section">
        {#each calculatorTypes as calculatorType}
          <Button
            on:click={() => handleClick(calculatorType)}
            btnHoverColor="green"
            btnText={`Calculate ${calculatorType}`}
            active={calculatorType === showCalculator}/>
        {/each}
      </div>

      <div class="main__section">
        <SelectAudioQuality on:selectAudioQuality={handleSelectAudioQuality}/>
      </div>

      <div>
        {#if showCalculator === 'data'}
          <CalculateData audioQuality={audioQuality}/>
        {/if}

        {#if showCalculator === 'time'}
          <CalculateTime audioQuality={audioQuality}/>
        {/if}
      </div>
    </div>


  </div>
</div>
