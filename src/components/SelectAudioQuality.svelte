<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../atoms/Button.svelte';

  const dispatch = createEventDispatcher();

  const audioQualities = [
    {name: 'Low', value: 24},
    {name: 'Medium', value: 96},
    {name: 'High', value: 160},
    {name: 'Very high', value: 320}
  ]
  let currentAudioQuality: number;

  const handleClick = (selectedAudioQuality: number) => {
    currentAudioQuality = selectedAudioQuality;
    dispatch('selectAudioQuality', selectedAudioQuality)
  }
</script>

<div class="streaming-quality">
  <div class="streaming-quality__meta">
    <p>Whats your streaming quality?</p>
    <p class="small">(Spotify => Settings => Streaming quality)</p>
  </div>

  <div class="streaming-quality__options">
    {#each audioQualities as audioQuality }
      <Button
        on:click={() => handleClick(audioQuality.value)}
        active={currentAudioQuality === audioQuality.value}
        btnHoverColor="blue"
        btnType="compact"
        btnText={audioQuality.name}/>
    {/each}
  </div>
</div>
