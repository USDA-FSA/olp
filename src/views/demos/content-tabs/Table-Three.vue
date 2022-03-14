<template>
  <div>


    <selection
      :ID="statesId"
      LABEL="State"
      :DATA="getStates()"
      REQUIRED="true"
      SELECT_CLASSES=""
      EXTRA_FIELD_CLASSES="fsa-m-t--s"
      EXTRA_SELECT_CLASSES="fsa-select--fill"
      FIELD_ERROR_CLASS=""
      ARIA_REQUIRED="true"
      HELP_MESSAGE=""
      ERROR_MESSAGE="A state is required"
      USE_POPOVER="false"
      POPOVER_TYPE="help"
      POPOVER_CLASSES="fsa-popover--rt fsa-popover--size-small"
      :POPOVER_ID="statesId+'-help-popover'"
      POPOVER_HEADER="State Selection Help"
    >
      <div :id="statesId + '-popup-body'">
        <p><strong>Note:</strong> Select a state to continue.</p>
      </div>
    </selection>

    <selection
      :ID="countiesId"
      LABEL="Counties"
      :DATA="getCounties()"
      REQUIRED="true"
      SELECT_CLASSES=""
      EXTRA_FIELD_CLASSES="fsa-m-t--l"
      EXTRA_SELECT_CLASSES="fsa-select--fill"
      FIELD_ERROR_CLASS=""
      ARIA_REQUIRED="true"
      HELP_MESSAGE=""
      ERROR_MESSAGE="A county is required"
      USE_POPOVER="false"
      POPOVER_TYPE="help"
      POPOVER_CLASSES="fsa-popover--rt fsa-popover--size-small"
      :POPOVER_ID="countiesId+'-help-popover'"
      POPOVER_HEADER="County Selection Help"
    >
      <div :id="countiesId + '-popup-body'">
        <p><strong>Note:</strong> Select a County to continue.</p>
      </div>
    </selection>


    <selection
      :ID="sourceId"
      LABEL="Source of Quantity"
      :DATA="sourceData"
      REQUIRED="true"
      SELECT_CLASSES=""
      EXTRA_FIELD_CLASSES="fsa-m-t--l"
      EXTRA_SELECT_CLASSES="fsa-select--fill"
      FIELD_ERROR_CLASS=""
      ARIA_REQUIRED="true"
      HELP_MESSAGE=""
      ERROR_MESSAGE="A source is required"
      USE_POPOVER="false"
      POPOVER_TYPE="help"
      POPOVER_CLASSES="fsa-popover--rt fsa-popover--size-small"
      :POPOVER_ID="sourceId+'-help-popover'"
      POPOVER_HEADER="County Selection Help"
    >
      <div :id="sourceId + '-popup-body'">
        <p><strong>Note:</strong> Select a County to continue.</p>
      </div>
    </selection>


    <div class="fsa-m-t--l fsa-level">
      <button id="modal-add-update" role="button" type="button" class="fsa-btn fsa-btn--primary">Search</button>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useSelectionControls } from '@/composables/useSelectionControls';
import selection from '@/components/selection/selection.vue';

export default {
  components: {
    selection
  },
  
  setup(props){
    const { getStates, getCounties } = useSelectionControls();
    
    const statesId = ref( uuidv4() );
    const countiesId = ref( uuidv4() );
    const sourceId = ref(uuidv4());
    const sourceData = ref([
      { id: "v0", label: "Select a source", name: "sourceGroup", val: 0, isDisabled: true, isSelected: true },
      { id: "v1", label: "Certified", val: "scoot", name: "sourceGroup"},
      { id: "v2", label: "Measurement Service", val: "cf", name: "sourceGroup"},
      { id: "v3", label: "Production Evidence", val: "pe", name: "sourceGroup"}
    ])

    return {
      statesId,
      countiesId,
      getStates,
      getCounties,
      sourceId,
      sourceData
    }
  }
}

</script>