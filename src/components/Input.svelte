<script lang="ts">
	// Props
	export let fieldLabel: string;
	export let fieldName: string;
	export let fieldDefaultValue: string = '';
	export let fieldLabelPosition: string = 'top';

	// Variables
	let fieldValue: string = fieldDefaultValue;
</script>

<div class="input input--{fieldLabelPosition}">
	<label class="input__label" for={fieldLabel}>{fieldName}</label>
	<input class="input__text" name={fieldLabel} type="number" min="0" bind:value={fieldValue} />
</div>

<style lang="scss">
	@use 'sass:math';
	@import '../scss/resources';

	.input {
		$input: &;

		margin: 0 math.div($spacer, 2);

		&--top {
			#{$input}__label {
				display: block;
				margin-bottom: math.div($spacer, 2);
			}
		}

		&--right {
			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
			align-items: center;

			#{$input}__label {
				margin-left: math.div($spacer, 2);
			}
		}

		&__text {
			width: $spacer * 6;
		}
	}
</style>
