<template>
  <div>

    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">OLP Demos</h1>
            </div>
          </div>

        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-text--lead">
            This prototype site is designed to showcase high-fidelity UX process flow. Select from the above Payments Menu to begin a flow.
          </div>
        </div>
      </div>

      <page-level-help-modal :MODAL_ID="helpModalId"></page-level-help-modal>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/composables/useNavigation';
import { useModalControls } from '@/composables/useModalControls';
import { usePopoverControls } from '@/composables/usePopoverControls';

import { v4 as uuidv4 } from 'uuid';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
const selectMulti = defineAsyncComponent(() => import('@/components/select-multi/select-multi.vue'));
const pageLevelHelpModal = defineAsyncComponent(() => import('@/views/demos/help/Page-Level-Help-Modal.vue'));
const inlineHelp = defineAsyncComponent(() => import('@/components/inline-help/inline-help.vue'));
const range = defineAsyncComponent(() => import('@/components/range/range.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    selectMulti,
    pageLevelHelpModal,
    inlineHelp,
    range
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();

    const {
      setModalId,
      getModalId,
      showModal,
      hideModal
    } = useModalControls();

    const { showPopover, hidePopover } = usePopoverControls();

    const helpModalId = ref( uuidv4() );
    setModalId(helpModalId.value);
    
    const priceRangeFieldRef = ref(null);
    const priceRangeFieldId = ref( uuidv4() );
    const rangeStep = ref('10'); // element property expects a string, not int
    const handleRangeChange = (_obj) => {
      // Do stuff here to control Parent
      //let step = parseInt( rangeStep.value ); 
    }

    const nameField = ref(null);
    const nameFieldId = ref( uuidv4() );

    const pieField = ref(null);
    const vehicleField = ref(null);
    const animalField = ref(null);

    const piesFieldId = ref( uuidv4() );
    const pieData = [
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];

    const vehicleDataZZZ = [
      { id: "v0", label: "Select a Vehicle", name: "vehiclesGroup", val: 0, isDisabled: true, isSelected: true },
      { id: "v1", label: "Motor Scooter", val: "scoot", name: "vehiclesGroup"},
      { id: "v2", label: "Cafe Racer", val: "cf", name: "vehiclesGroup"},
      { id: "v3", label: "Can-Am", val: "can", name: "vehiclesGroup"},
      { id: "v4", label: "4-Door Sedan", val: "sedan", name: "vehiclesGroup"},
      { id: "v5", label: "Sports Coupe", val: "Coupe", name: "vehiclesGroup"},
      { id: "v6", label: "Cross Over SUV", val: "xo", name: "vehiclesGroup"},
      { id: "v7", label: "Minivan", val: "van", name: "vehiclesGroup"},
      { id: "v8", label: "Pickup Truck", val: "truck", name: "vehiclesGroup"},
      { id: "v9", label: "7 Passenger SUV", val: "suv", name: "vehiclesGroup"},
      { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "vehiclesGroup"}
    ];

    const vehicleId = ref(uuidv4());
    const vehicleData = [
      { 
        groupId: "g0",
        groupData: [
          { id: "v0", label: "Select a Vehicle", name: "vehiclesGroup", val: 0, isDisabled: true, isSelected: true },
        ]
      },
      { 
        groupId: "g1",
        groupLabel: "Small Vehicles",
        groupData: [
          { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
          { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
          { id: "v3", label: "Can-Am", val: "can", name: "small"},
        ]
      },
      { 
        groupId: "g2",
        groupLabel: "Medium Vehicles",
        groupData: [
          { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
          { id: "v5", label: "Sports Coupe", val: "Coupe", name: "medium"},
          { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
        ]
      },
      { 
        groupId: "g3",
        groupLabel: "Large Vehicles",
        groupData: [
          { id: "v7", label: "Minivan", val: "van", name: "large"},
          { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
          { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
          { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"},
        ]
      },
    ];

    const animalData = [
      { id: "a0", label: "Select all", val: "", name: "a0", behavior: "select-multi-all"},
      { id: "a1", label: "Aligator", val: "", name: "a1", behavior: ""},
      { id: "a2", label: "Buffalo", val: "checked", name: "a2", behavior: ""},
      { id: "a3", label: "Cow", val: "", name: "a3", behavior: ""},
      { id: "a4", label: "Dolphin", val: "", name: "a4", behavior: ""},
      { id: "a5", label: "Elephant", val: "", name: "a5", behavior: ""},
      { id: "a6", label: "Frog", val: "", name: "a6", behavior: ""},
      { id: "a7", label: "Goose", val: "", name: "a7", behavior: ""},
    ];


    let nameHasError = ref(false);
    let piesHasError = ref(false);
    let vehicleHasError = ref(false);
    let animalHasError = ref(false);
    let priceRangeHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(nameHasError.value);
      } 
      if(type=='pies'){
        piesHasError.value = piesHasError.value ? false : true;
        pieField.value.setHasError(piesHasError.value);
      }
      if(type=='vehicle'){
        vehicleHasError.value = vehicleHasError.value ? false : true;
        vehicleField.value.setHasError(vehicleHasError.value);
      }
      if(type=='animal'){
        animalHasError.value = animalHasError.value ? false : true;
        animalField.value.setHasError(animalHasError.value);
      } 
      if(type=='price-range'){
        priceRangeHasError.value = priceRangeHasError.value ? false : true;
        let el = priceRangeFieldRef.value;
        el.setHasError(priceRangeHasError.value);
        el.hasErrorCaller(priceRangeHasError.value);
      } 
    }

    const headerText = ref('Search Header Default');
    const searchResults = ref('');

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results:'
      searchResults.value = obj.phrase;
    };

    onMounted(()=>{

    });

    return {
      priceRangeFieldRef,
      priceRangeFieldId,
      handleRangeChange,
      rangeStep,
      nameField,
      nameFieldId,
      piesFieldId,
      pieField,
      vehicleId,
      vehicleField,
      animalField,
      setError,
      pieData,
      vehicleData,
      animalData,
      submitSearch,
      searchResults,
      headerText,
      showModal,
      hideModal,
      helpModalId,
      showPopover,
      hidePopover
    }
  }

}
</script>