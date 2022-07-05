<script lang="ts">
  // Props
  export let fieldLabel: string;
  export let fieldName: string;
  export let fieldDefaultValue: string = '';
  export let fieldLabelPosition: string = 'top';

  // Variables
  let fieldValue: string = fieldDefaultValue;
</script>

<div>
  <label for={fieldLabel}>{fieldName}</label>
  <input
    name={fieldLabel}
    type="number"
    min="0"
    bind:value={fieldValue}
  />
</div>
