<script lang="ts">
	export let buttonSelected = false;
  export let buttonDisabled = false;
	export let buttonText = 'Add button text';
	export let buttonType = 'primary';
  export let buttonHoverColor: string;
</script>

<button
  on:click
  class="btn btn--{buttonType} btn-hover--{buttonHoverColor}"
  class:btn--active={buttonSelected}
  class:btn--disabled={buttonDisabled}
>
  {buttonText}
</button>

<style lang="scss">
@use 'sass:math';
@import '../scss/resources';

.btn {
  $btn: &;
  @include border-outset;


  position: relative;
  background-color: var(--color-grey);
  cursor: pointer;

  &:hover,
  &:focus,
  &--active {
    @include border-inset;
  }

  &--active {
    &::after {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 11px;
      height: 15px;
      background: url(../assets/images/flag.png) center center no-repeat;
      content: '';
    }
  }

  &--primary {
    padding: 0.8rem $spacer;
    border-width: 5px;
    font-size: 1.2rem;
  }

  &--compact {
    padding: 0.7rem $spacer;
    border-width: 3px;
    font-size: 0.8rem;

    &::after {
      top: $spacer * 0.5;
    }
  }

  &-hover--green {
    &:hover,
    &#{$btn}--active {
      color: var(--color-green);
    }
  }

  &-hover--blue {
    &:hover,
    &#{$btn}--active {
      color: var(--color-blue);
    }
  }

  &-hover--red {
    &:hover,
    &#{$btn}--active {
      color: var(--color-red);
    }
  }

  &--disabled {
    @include border-inset;

    cursor: pointer;
    opacity: 0.2;
    pointer-events: none;
  }
}
</style>
