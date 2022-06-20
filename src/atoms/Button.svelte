<script lang="ts">
  export let btnText: string = 'Add button text';
  export let btnType: string = 'button';
</script>

<button on:click type={btnType}>{btnText}</button>

<style lang="scss">
  button {
    background-color: red;
  }
</style>
