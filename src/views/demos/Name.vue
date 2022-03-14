<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Dynamic Router Demo</h1>

          <div class="fsa-m-t--sm">
              <p class="fsa-m-t--7">What page are we on?  <span class="fsa-text-size--5">{{ pageName }}</span></p>
          </div>

          

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){
    
    const route = useRoute();

    const pageName = route.params.id;

    return {
      pageName
    }
  }
}
</script>