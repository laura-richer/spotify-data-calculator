<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();
	const audioQualities = [
		{ name: 'Low', value: 24 },
		{ name: 'Medium', value: 96 },
		{ name: 'High', value: 160 },
		{ name: 'Very high', value: 320 }
	];
	let currentAudioQuality: number;

	const handleClick = (selectedAudioQuality: number) => {
		currentAudioQuality = selectedAudioQuality;
		dispatch('selectAudioQuality', currentAudioQuality);
	};
</script>

<div class="streaming-quality">
	<div class="streaming-quality__meta">
		<p>Whats your streaming quality?</p>
		<p class="small">(Spotify => Settings => Streaming quality)</p>
	</div>

	<div class="streaming-quality__options">
		{#each audioQualities as audioQuality}
			<Button
				on:click={() => handleClick(audioQuality.value)}
				active={currentAudioQuality === audioQuality.value}
				btnHoverColor="blue"
				btnType="compact"
				btnText={audioQuality.name}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../scss/resources';

	.streaming-quality {
		&__meta {
			background-color: $grey;
			padding: $spacer * 1.5;
		}

		&__options {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
