<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Content Tabs Demo</h1>
          <div class="fsa-m-t--m">

            <content-tabs :TABS_DATA="tabsData" @emitTabSelection="handleTabSelected">
              
              <template v-slot:containers>
                <div :id="tableOneId">
                  <table-one ref="tableOneRef"></table-one>
                </div>
                <div :id="tableTwoId">
                  <table-two ref="tableTwoRef"></table-two>
                </div>
                <div :id="tableThreeId">
                  <table-three ref="tableThreeRef"></table-three>
                </div>
              </template>

            </content-tabs>


          </div>
        </div>
        <!-- fsa-section__bd END --> 
      </div>
      <!-- fsa-section END --> 
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

import contentTabs from '@/components/content-tabs/content-tabs.vue';
import tableOne from '@/views/demos/content-tabs/Table-One.vue';
import tableTwo from '@/views/demos/content-tabs/Table-Two.vue';
import tableThree from '@/views/demos/content-tabs/Table-Three.vue';


export default {
  components: {
    baseHeader,
    baseFooter,
    contentTabs,
    tableOne,
    tableTwo,
    tableThree
  },

  setup(props){
    
    const route = useRoute();

    const tableOneId = ref(uuidv4());
    const tableTwoId = ref(uuidv4());
    const tableThreeId = ref(uuidv4());

    const tableOneRef = ref(null);
    const tableTwoRef = ref(null);
    const tableThreeRef = ref(null);


    const tabsData = ref([
      {
        id: 'tab-one-id',
        label: 'LDP Applications',
        isSelected: true,
        containerId: tableOneId
      },
      {
        id: 'tab-two-id',
        label: 'Program Information',
        isSelected: false,
        containerId: tableTwoId
      },      
      {
        id: 'tab-three-id',
        label: 'Search Records',
        isSelected: false,
        containerId: tableThreeId
      }
      
    ]);


    const handleTabSelected = (_obj) => {
      // Do something in Parent Component when Tab Selected
      console.log('_obj.id',_obj.id)
    }

    return {
      tabsData,
      handleTabSelected,
      tableOneId,
      tableTwoId,
      tableThreeId,
      tableOneRef,
      tableTwoRef,
      tableThreeRef
    }
  }
}
</script>