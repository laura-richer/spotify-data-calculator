<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  interface AudioQualityObject {
    name: string;
    value : number,
  }

  // Props
  export let resetSelectedAudioQuality: number;

  // Variables
  const dispatch = createEventDispatcher();
  const audioQualities:AudioQualityObject[] = [
    { name: 'Low', value: 24 },
    { name: 'Medium', value: 96 },
    { name: 'High', value: 160 },
    { name: 'Very high', value: 320 },
  ];
  let currentAudioQuality: number;

  // Methods
  const handleSelectAudioQuality = (selectedAudioQuality: number) => {
    currentAudioQuality = selectedAudioQuality;
    dispatch('selectAudioQuality', currentAudioQuality);
  };

  $: {
    if (resetSelectedAudioQuality === 0) {
      currentAudioQuality = 0;
    }
  }
</script>

<div class="select-audio-quality">
  <div class="select-audio-quality__meta">
    <p>Whats your streaming quality?</p>
    <p class="small">(Spotify => Settings => Streaming quality)</p>
  </div>

  <div class="select-audio-quality__options">
    {#each audioQualities as audioQuality }
      <Button
        on:click={() => handleSelectAudioQuality(audioQuality.value)}
        active={currentAudioQuality === audioQuality.value}
        buttonHoverColor="blue"
        buttonType="compact"
        buttonText={audioQuality.name}/>
    {/each}
  </div>
</div>

<style lang="scss">
@import '../scss/resources';

.select-audio-quality {
  &__meta {
    padding: $spacer * 1.5;
    background-color: var(--color-grey);
  }

  &__options {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
