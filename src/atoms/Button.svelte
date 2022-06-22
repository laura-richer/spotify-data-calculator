<script lang="ts">
  export let btnText: string = 'Add button text';
  export let btnType: string = 'primary';
  export let btnHoverColor: string = 'green';
</script>

<button on:click class="btn btn--{btnType} btn-focus--{btnHoverColor}">{btnText}</button>
