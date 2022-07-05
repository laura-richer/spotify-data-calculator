<script lang="ts">
  import '../scss/app.scss';

  import Button from '../atoms/Button.svelte';
  import Calculator from '../components/Calculator.svelte';
  import SelectAudioQuality from '../components/SelectAudioQuality.svelte';
  import Header from '../components/Header.svelte';

  const calculatorTypes: Array<string> = [
    'time',
    'data'
  ];
  let selectedCalculator: string;
  let audioQuality: number;

  const handleSelectCalculatorType = (calculatorType: string) => {
    selectedCalculator = calculatorType;
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
            on:click={() => handleSelectCalculatorType(calculatorType)}
            btnHoverColor="green"
            btnText={`Calculate ${calculatorType}`}
            active={calculatorType === selectedCalculator}/>
        {/each}
      </div>

      <div class="main__section">
        <SelectAudioQuality on:selectAudioQuality={handleSelectAudioQuality}/>
      </div>

      <div>
        {#if selectedCalculator}
          <Calculator audioQuality={audioQuality} calculatorType={selectedCalculator} />
        {/if}
      </div>
    </div>


  </div>
</div>
