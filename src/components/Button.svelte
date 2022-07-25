<script lang="ts">
	export let active: boolean = false;
	export let btnText: string = 'Add button text';
	export let btnType: string = 'primary';
	export let btnHoverColor: string = 'green';
</script>

<button on:click class="btn btn--{btnType} btn-focus--{btnHoverColor}" class:btn--active={active}
	>{btnText}</button
>

<style lang="scss">
	@use 'sass:math';
	@import '../scss/resources';

	.btn {
		$btn: &;
		@include border-outset;

		position: relative;
		background-color: $grey;
		cursor: pointer;

		&:hover,
		&:focus,
		&--active {
			@include border-inset;
		}

		&--active {
			&:after {
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
			font-size: 0.8rem;
			padding: 0.7rem $spacer;
			border-width: 3px;

			&:after {
				top: $spacer * 0.5;
			}
		}

		&-focus--green {
			&:focus,
			&#{$btn}--active {
				color: $green;
			}
		}

		&-focus--blue {
			&:focus,
			&#{$btn}--active {
				color: $blue;
			}
		}

		&-focus--red {
			&:focus,
			&#{$btn}--active {
				color: $red;
			}
		}
	}
</style>
