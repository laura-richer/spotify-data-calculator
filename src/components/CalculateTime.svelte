<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';

	// Props
	export let audioQuality: number;

	// Variables
	const dispatch = createEventDispatcher();
	let days: string = '00';
	let hours: string = '00';
	let minutes: string = '00';

	// Methods
	const calculateTime = (days: string, hours: string, minutes: string) => {
		console.log(audioQuality);
		console.log(days);
		console.log(hours);
		console.log(minutes);
		dispatch('result', `${days}, ${hours}, ${minutes}`);
	};
</script>

<div class="calculate-time">
	<Input fieldLabel={'days'} fieldName={'Days'} fieldDefaultValue={'00'} />
	<Input fieldLabel={'hours'} fieldName={'Hours'} fieldDefaultValue={'00'} />
	<Input fieldLabel={'minutes'} fieldName={'Minutes'} fieldDefaultValue={'00'} />
</div>
<Button
	btnText={'Calculate'}
	btnHoverColor="red"
	on:click={() => calculateTime(days, hours, minutes)}
/>

<style lang="scss">
	.calculate-time {
		display: flex;
		justify-content: center;
	}
</style>
