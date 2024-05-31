<script lang="ts">
	import { audioQualities } from '$lib/constants/audio-qualities.js';
	import Button from '$lib/atoms/Button.svelte';

	import { resetResult, setAudioQuality, store } from '$lib/store';

	interface AudioQualityObject {
		name: string;
		value: number;
	}

	let selectedAudioQuality: number;

	// Store
	store.subscribe((value) => {
		selectedAudioQuality = value.audioQuality;
	});

	// Methods
	const handleSelectAudioQuality = (quality: AudioQualityObject): void => {
		if (quality.value === selectedAudioQuality) return;

		resetResult();
		setAudioQuality(quality.value);
	};
</script>

<div class="select-audio-quality">
	<div class="select-audio-quality__meta">
		<p>Whats your streaming quality?</p>
		<p class="small">(Spotify => Settings => Streaming quality)</p>
	</div>

	<div class="select-audio-quality__options">
		{#each audioQualities as audioQuality}
			<Button
				on:click={() => handleSelectAudioQuality(audioQuality)}
				buttonSelected={selectedAudioQuality === audioQuality.value}
				buttonHoverColor="blue"
				buttonType="compact"
				buttonText={audioQuality.name}
			/>
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
