<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Stepped Demos</h1>
              <div class="fsa-level fsa-level--justify-between fsa-level--grow-auto">
                <span>
                  <button @click="showModal(helpModalId)" class="fsa-btn fsa-btn--block fsa-btn--flat" type="button">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                    Help
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="fsa-section">
        <div v-if="tabsData" class="fsa-section__bd">
          <stepped-tabs
            :ID="steppedTabsId"
            :TABS_DATA="tabsData"
            @emitSelectedTab="handleSelectedTab"
            ref="steppedTabsRef">
          </stepped-tabs>


          <div class="fsa-m-t--l">
            <h3>Page Content Below</h3>
          </div>
          <div v-if="tabsData" class="fsa-m-t--l fsa-box fsa-level fsa-level--gutter-l">
            <button
              v-for="tab in tabsData"
              :key="tab.id"
              @click="setActiveTab(tab.id)"
              class="fsa-btn fsa-btn--secondary">
              {{ tab.label }}
            </button>
          </div>
          

        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">
          
          <!--
          USE_PREV: String,
          PREV_LABEL: String,
          USE_PREV_SECONDARY: String,
          PREV_SECONDARY_LABEL: String,
          USE_NEXT: String,
          NEXT_LABEL: String,
          NEXT_DISABLED: String,
          EXTRA_CLASSES: String,
          USE_STEPS: String,
          STEPS_CURRENT: String,
          STEPS_TOTAL: String,
          STEPS_LABEL: String
          -->
          <stepped-control
            :USE_PREV="usePrev"
            :PREV_LABEL="prevLabel"
            :USE_NEXT="useNext"
            :NEXT_LABEL="nextLabel"
            EXTRA_CLASSES="fsa-m-t--l"
            @emitPrev="prev"
            @emitNext="next">
          </stepped-control>

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, watch, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from 'vuex';
import { useNavigation } from '@/composables/useNavigation';
import { useSteppedControls } from '@/composables/useSteppedControls';
import { useUtilities } from '@/composables/useUtilities';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const steppedTabs = defineAsyncComponent(() => import('@/components/stepped-tabs/stepped-tabs.vue'));
const steppedControl = defineAsyncComponent(() => import('@/components/stepped-control/stepped-control.vue'));
 
export default {

  components: {
    baseHeader,
    baseFooter,
    steppedTabs,
    steppedControl
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();
    const { updateSteppedControls } = useSteppedControls();
    const { getPropertyFromId, setPropertyFromId, setPropertyFromProperty } = useUtilities();

    const steppedTabsRef = ref(null);
    const steppedTabsId = ref( uuidv4() );
    const currentTabIndex = ref(0);
    const steppedTabsData = ref(
      [
        {
          "id": "step-one-tab-123",
          "label": "Step One",
          "path": "",
          "useIcon": "true",
          "iconPath": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
          "isEnabled": true,
          "status": "active"
        },
        {
          "id": "step-two-tab-456",
          "label": "Step Two",
          "path": "",
          "useIcon": "true",
          "iconPath": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
          "isEnabled": true,
          "status": "incomplete"
        },
        {
          "id": "step-three-tab-789",
          "label": "Step Three",
          "path":  "",
          "useIcon": "true",
          "iconPath": "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
          "isEnabled": false,
          "status": "incomplete"
        },
        {
          "id": "step-four-tab-1011",
          "label": "Step Four",
          "path":  "",
          "useIcon": "true",
          "iconPath": "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",
          "isEnabled": true,
          "status": "incomplete"
        },
        {
          "id": "step-five-tab-1011",
          "label": "Step Five",
          "path":  "",
          "useIcon": "true",
          "iconPath": "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          "isEnabled": false,
          "status": "incomplete"
        }          
      ]
    );
    const tabsData = ref(null);


    // emitted from child Stepped Tabs
    const handleSelectedTab = (_id) => setActiveTab(_id);

    const setActiveTab = (_id) => {

      currentTabIndex.value = tabsData.value.findIndex(o => o.id == _id);
      tabsData.value.forEach((o, index)=>{
        if(index < currentTabIndex.value) {
          o.status = 'complete';
          o.isEnabled = true;
        } else if((index > currentTabIndex.value) && o.status != 'incomplete') {
          o.status = 'complete';
        }
      });
      setPropertyFromId(_id, 'isEnabled', true, tabsData.value);
      setPropertyFromId(_id, 'status', 'active', tabsData.value);
      setSteppedButtons(currentTabIndex.value, 'next', tabsData.value);

    }

    const usePrev = ref('false');
    const useNext = ref('true');
    const prevLabel = ref('Back');
    const nextLabel = ref('Next Step');

    const setSteppedButtons = (_ind, _dir, _arr) => {
      if(_dir=='next'){
        useNext.value = (_ind+1) == _arr.length ? 'false' : 'true';
        usePrev.value = _ind > 0 ? 'true' : 'false';
      }
      if(_dir=='prev'){
        usePrev.value = _ind == 0 ? 'false' : 'true';
        useNext.value = _ind < _arr.length ? 'true' : 'false';
      }
    }

    const next = () => {

      let ind = currentTabIndex.value + 1;
      setSteppedButtons(ind, 'next', steppedTabsData.value);

      let tabData = steppedTabsData.value[ind] ? steppedTabsData.value[ind] : {};
    
      if(tabData.id) setActiveTab(tabData.id)

      let newData = { data: 'data being passed to Store' }
      let newPath = tabData.path || '';
      let errMsg = 'There was an error updating the data.'
      
      updateSteppedControls( newData, newPath, errMsg );
      
    }

    const prev = () => {

      let ind = currentTabIndex.value - 1;
      setSteppedButtons(ind, 'prev', steppedTabsData.value);

      let tabData = steppedTabsData.value[ind] ? steppedTabsData.value[ind] : {};

      if(tabData.id) setActiveTab(tabData.id)

      let newData = { data: 'data being passed to Store' }
      let newPath = tabData.path || '';
      let errMsg = 'There was an error updating the data.'
      
      updateSteppedControls( newData, newPath, errMsg );
    }

    const setTabsData = (_data) => {
      tabsData.value = _data;
    }
    
    watch(steppedTabsData, (value)=>{
      setTabsData(value);
    });

    onMounted(()=>{
      setTabsData(steppedTabsData.value);
    })

    return {
      steppedTabsId,
      steppedTabsRef,
      tabsData,
      handleSelectedTab,
      setActiveTab,
      prev,
      next,
      usePrev,
      useNext,
      prevLabel,
      nextLabel
    }
  }

}
</script>