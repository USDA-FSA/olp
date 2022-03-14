<template>
  <div>

    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <div class="fsa-level fsa-level--justify-between fsa-level--align-top">
            <span>
              <field
                ID="name"
                EXTRA_CLASSES=""
                LABEL="Full Name"
                INPUT_VALUE=""
                INPUT_TYPE="text"
                REQUIRED="true"
                ARIA_REQUIRED="true"
                BEHAVIOR=""
                ARIA_DESCRIBEDBY="name__help"
                HELP_MESSAGE="Use your full name, please."
                ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
                HAS_ERROR="false"
                ref="nameField"
              >
              </field>
            </span>
            <span>
              <p class="fsa-m-t--l">
                <button @click="setError('name')" class="fsa-btn fsa-btn--secondary">Toggle Name Error</button>
              </p>
            </span>
          </div>
        </div>
      </div>
      <!-- Search Results Section -->
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h2>{{headerText}}</h2>
          <span class="fsa-m-t--l">{{searchResults}}</span>
        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/components/field/field.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field
  },

  setup(props){
    const store = useStore();

    const nameField = ref(null);
    let nameHasError = ref(false);


    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(nameHasError.value);
      } 
    }

    const headerText = ref('Search Header Default');
    const searchResults = ref('');

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results:'
      searchResults.value = obj.phrase;
    };

    onMounted(()=>{
      console.log('Home onMounted');
    });

    return {
      nameField,
      setError,
      submitSearch,
      searchResults,
      headerText
    }
  }

}
</script>