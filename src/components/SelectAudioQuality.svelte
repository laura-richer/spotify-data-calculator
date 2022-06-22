<script lang="ts">
  import Button from '../atoms/Button.svelte';
</script>

<div class="streaming-quality">
  <p>Whats your streaming quality?</p>
  <p class="small">(Spotify => Settings => Streaming quality)</p>

  <div class="streaming-quality__options">
    <Button btnHoverColor="blue" btnType="compact" btnText={"Low"}/>
    <Button btnHoverColor="blue" btnType="compact" btnText={"Medium"}/>
    <Button btnHoverColor="blue" btnType="compact" btnText={"High"}/>
    <Button btnHoverColor="blue" btnType="compact" btnText={"Very High"}/>
  </div>
</div>
