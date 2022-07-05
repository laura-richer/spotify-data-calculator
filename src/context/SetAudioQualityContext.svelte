<script lang="ts">
    import { setContext } from 'svelte';

    export let audioQuality: number;

    $: {
      setContext('audioQuality', audioQuality);
    }
</script>

<slot></slot>
