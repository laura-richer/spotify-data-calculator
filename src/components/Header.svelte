<header class="header">
	<h1>Spotify data calculator</h1>
</header>

<style lang="scss">
  @use 'sass:math';
  @import '../scss/resources';

  .header {
    @include border-inset;

    display: flex;
    justify-content: center;
    padding: $spacer * 1.5 $spacer * 2;
    border-width: math.div($spacer, 2);
  }
</style>
