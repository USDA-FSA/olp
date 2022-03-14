<template>
  <footer>
    <footerTopper v-if="!HIDE_RETURN_TO_TOP=='true'"></footerTopper>
    <footerFooter 
      APP_ABBR_NAME="OLP">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="OLP-123-XYZ">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';

import footerTopper from '@/components/footer/footer-topper.vue';
import footerFooter from '@/components/footer/footer-footer.vue';
import footerScreenId from '@/components/footer/footer-screen-id.vue';
import hiddenItems from '@/components/hidden/hidden-items.vue';

export default {
  props: {
    USE_RETURN_TO_TOP: String
  },
  setup(){

  },
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  }
}
</script>