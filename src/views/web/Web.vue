<template>
  <div>
    <header>
      <globalNav :NAV_DATA="navigationData"
        EXTRA_CLASSES="fsa-nav-global__list-item--multi-column"
        USE_SEARCH="true"
        @emitSearch="submitSearch"
        ></globalNav>
    </header>
    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-breadcrumb">
            <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
              <ol class="fsa-breadcrumb__list">
                <li class="fsa-breadcrumb__item">
                  <a class="fsa-breadcrumb__link" href="link.html">Inspections</a>
                </li>
                <li class="fsa-breadcrumb__item" aria-current="page">
                  <a class="fsa-breadcrumb__link" href="link.html">Inspection Detail</a>
                </li>
              </ol>
            </nav>
          </div>
          <div class="fsa-level@m fsa-level--justify-between">
            <h1 class="fsa-m--none">Inspection&nbsp;#9458</h1>
            <div class="fsa-level fsa-level--justify-between fsa-level--grow-auto">
              <span>
                <button class="fsa-btn fsa-btn--block fsa-btn--secondary" type="button">
                  <svg
                    class="fsa-icon fsa-icon--size-2"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    />
                  </svg>
                  Edit
                </button>
              </span>
              <span>
                <button class="fsa-btn fsa-btn--block fsa-btn--primary" type="button">
                  <svg
                    class="fsa-icon fsa-icon--size-2"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                    />
                  </svg>
                  Start
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h2>{{headerText}}</h2>
          <span class="fsa-m-t--l">{{searchResults}}</span>
        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <field
            :ID="nameFieldId"
            EXTRA_CLASSES=""
            LABEL="Full Name"
            INPUT_VALUE=""
            INPUT_TYPE="text"
            REQUIRED="true"
            ARIA_REQUIRED="true"
            BEHAVIOR=""
            :ARIA_DESCRIBEDBY="nameFieldId + '__help'"
            HELP_MESSAGE="Use your full name, please."
            ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
            HAS_ERROR="false"
            USE_POPOVER="true"
            POPOVER_TYPE="help"
            POPOVER_CLASSES="fsa-popover--tr fsa-popover--size-small"
            :POPOVER_ID="nameFieldId+'-help-popover'"
            POPOVER_HEADER="Full Name Help"
            ref="nameField"
          >
            <div :id="nameFieldId + '-popup-body'">
              <p><strong>Note:</strong> Please provide your full legal given name, a it is written on your birth certificate.</p>
            </div>
          </field>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';

import globalNav from "@/components/global-nav/global-nav.vue";

import field from '@/components/field/field.vue';

export default {
  components: {
    globalNav,
    field
  },

  setup(props) {
    const store = useStore();

    const navigationData = computed(() => store.getters["web/getNavigation"]);

    const headerText = ref('Header Default');
    const searchResults = ref('');

    const scopedSearcCategories = computed(() => [{label:'One', val: 1},{label:'Two',val: 2},{label:'Three',val: 3},{label:'Four',val:4}] );

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results:'
      searchResults.value = obj.phrase;
    };

    const nameFieldId = ref(uuidv4());

    onMounted(() => {
      store.dispatch("web/setNavigation");
    });

    return {
      headerText,
      navigationData,
      scopedSearcCategories,
      submitSearch,
      searchResults,
      nameFieldId
    };
  }
};
</script>