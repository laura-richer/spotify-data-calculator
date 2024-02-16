<script lang="ts">
  import { createEventDispatcher } from 'svelte';

	// Props
	export let fieldLabel: string;
	export let fieldName: string;
	export let fieldDefaultValue = '';
	export let fieldLabelPosition = 'top';

	// Variables
  const dispatch = createEventDispatcher<{inputChange: { value: string, fieldLabel: string }}>();
	let fieldValue = fieldDefaultValue;

  // Methods
  const onValueChange = (value: string):boolean => dispatch('inputChange', {value, fieldLabel});
  const onFieldFocus = ():void => {
    fieldValue = '';
    dispatch('inputChange', {value: fieldValue, fieldLabel})
  };
</script>

<div class="input input--{fieldLabelPosition}">
	<label class="input__label" for={fieldLabel}>{fieldName}</label>
	<input
    class="input__text"
    name={fieldLabel}
    type="number"
    min="0"
    bind:value={fieldValue}
    on:input={() => onValueChange(fieldValue)}
    on:focus={() => onFieldFocus()}
  />
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
      align-items: center;
      justify-content: center;

      #{$input}__label {
        margin-left: math.div($spacer, 2);
      }
    }

    &__text {
      width: $spacer * 6;
    }
  }
</style>
