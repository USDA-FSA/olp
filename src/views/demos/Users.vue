<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Users</h1>

          <div class="fsa-m-t--sm">
              <p class="fsa-m-t--l">
                <button @click="getUsersData()" class="fsa-btn fsa-btn--secondary">Get Data From API</button>
              </p>
              <p><a href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</a></p>
          </div>

          <div class="fsa-m-b--l">

              <table class="fsa-table">
                <caption>
                  <h2>Dynamic Users Data</h2>
                </caption>
                <thead>
                  <tr>
                    <th scope="col" aria-sort="ascending" class="fsa-text-align--left"><button id="tableSort-1" @click="toggleSort($event)" class="fsa-table__sort fsa-table__sort--ascending" type="button">ID</button></th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody v-if="users">
                  <tr v-for="(user, id) in users" v-bind:key="id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                  </tr>
                </tbody>
              </table>

          </div>

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){
    const store = useStore();

    const usersData = computed( () => store.getters['users/getUsers'] );

    let users = ref([]);
    let isSortAsc = ref(true);

    const getUsersData = () => {
      store.dispatch('users/getUsersFromApi');
    }

    const toggleSort = (e) => {
      let id = e.currentTarget.id;
      isSortAsc.value = !isSortAsc.value;
      if(isSortAsc.value){
        users.value = usersData.value.sort( (a, b) => a.id - b.id );
        document.getElementById(id).classList.remove('fsa-table__sort--descending')
        document.getElementById(id).classList.add('fsa-table__sort--ascending')
        document.getElementById(id).ariaSort = 'ascending'
      } else {
        users.value = usersData.value.sort( (a, b) => b.id - a.id );
        document.getElementById(id).classList.remove('fsa-table__sort--ascending')
        document.getElementById(id).classList.add('fsa-table__sort--descending')
        document.getElementById(id).ariaSort = 'descending'
      }
    }

    watch(usersData, (val) => {
      users.value = val;
    })

    return {
      users,
      getUsersData,
      toggleSort,
    }
  }
}
</script>