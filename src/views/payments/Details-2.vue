<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Payment Details</h1>


          <div class="fsa-m-t--xl fsa-level fsa-level--grow-even">
            <div><span class="fsa-text-size--3">Customer: <strong><span class="fsa-text-allcaps">Robert McPherson</span></strong></span></div>
            <div><span class="fsa-text-size--3">Program Code: <strong><span class="fsa-text-allcaps">20FUE03SCM</span></strong></span></div>
            

            <div><span class="fsa-text-size--3">Creation Date: <strong><span class="fsa-text-allcaps">04/22/2020</span></strong></span></div>
            
          </div>

          <div class="fsa-m-t--xs fsa-level fsa-level--grow-even">
            <div><span class="fsa-text-size--3">State: <strong><span class="fsa-text-allcaps">South Dakota (46)</span></strong></span></div>

            
            <div><span class="fsa-text-size--3">Tax Type: <strong><span class="fsa-text-allcaps">Some Type Here</span></strong></span></div>

            <div><span class="fsa-text-size--3">Approval Date: <strong><span class="fsa-text-allcaps">06/21/2020</span></strong></span></div>
            
          </div>

          <div class="fsa-m-t--xs fsa-m-b--s fsa-level fsa-level--grow-even">
            <div><span class="fsa-text-size--3">County: <strong><span class="fsa-text-allcaps">Codington (029)</span></strong></span></div>

            <div><span class="fsa-text-size--3">Business Type: <strong><span class="fsa-text-allcaps">Type of Business Here</span></strong></span></div>
            
            <div><span class="fsa-text-size--3">Issue Date: <strong><span class="fsa-text-allcaps">09/03/2020</span></strong></span></div>
          </div>

          <div class="fsa-m-t--xs fsa-m-b--s fsa-level fsa-level--grow-even">
            <div><span class="fsa-text-size--3">Tax ID: <strong><span class="fsa-text-allcaps">20391823</span></strong></span></div>

            
            <div><span class="fsa-text-size--3">Agreement Number: <strong><span class="fsa-text-allcaps">912837475</span></strong></span></div>
            <div><span class="fsa-text-size--3">Voucher Number: <strong><span class="fsa-text-allcaps">91928328747</span></strong></span></div>
          </div>

          <div class="fsa-m-t--m">
            <div><span class="fsa-text-size--3">Notes: Additional details that might need to be displayed here in longer format. This could also be a paragraph.</span></div>
          </div>

          <div class=" fsa-m-t--l fsa-level fsa-level--justify-between fsa-level--gutter-m fsa-level--align-stretch fsa-level--grow-auto">
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Payment ID</div>
              <div class="fsa-text-size--4"><strong>102938</strong></div>
            </div>
            
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Payment Amount</div>
              <div class="fsa-text-size--4">$500.00</div>
            </div>
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Amount</div>
              <div class="fsa-text-size--4">$2,234.50</div>
            </div>
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Current Balance</div>
              <div class="fsa-text-size--4">$1000.00</div>
            </div>
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Prompt Pay Due</div>
              <div class="fsa-text-size--4 fsa-text-color-"><strong>$1,134.50</strong></div>
            </div>
            <div class="fsa-box fsa-box--bg-1 fsa-p--s">
              <div class="fsa-text--h6">Status</div>
              <div class="fsa-text-size--4">
                <span class="fsa-label fsa-label--large fsa-label--warning">In&nbsp;Progress</span>
              </div>
            </div>
          </div>

          <div class="fsa-m-t--xl fsa-m-b--xl">
            <button @click="goto('/')" class="fsa-btn fsa-btn--primary" type="button">Return to Search</button>
          </div>
          

        </div>
      </div>

    </main>

    <baseFooter HIDE_RETURN_TO_TOP="true"></baseFooter>
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


    return {
      
    }
  }
}
</script>