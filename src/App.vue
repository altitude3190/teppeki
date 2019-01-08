
<template>
  <div id="app">
    <header class="bar bar-nav">
      <h1 class="title">Flashcards</h1>
    </header>
    <div class="content">
      <ul class="table-view">
        <li class="table-view-divider">Languages</li>
        <li class="table-view-cell" v-for="language in languages" :key="language.id">
          <router-link class="navigate-right" v-bind:to="'/language/' + language.id">
            {{ language.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CONST from '@/Const.vue';

export default {
    name: 'app',
    computed: {
        languages() {
            return Object.values(CONST.LANGUAGE).sort((a, b) => a.id - b.id);
        },
    },
};
</script>
