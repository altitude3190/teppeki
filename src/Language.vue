<template>
  <div id="app">
    <header class="bar bar-nav">
      <router-link to="/">
        <button class="btn pull-left">
          HOME
        </button>
      </router-link>
      <router-link v-bind:to="'/language/' + langId + '/uncheckedwords'">
        <button class="btn pull-right">
          登録単語
        </button>
      </router-link>
      <h1 class="title">{{ languageMap[langId].name }}</h1>
    </header>
    <div class="content">
      <ul class="table-view">
        <li class="table-view-cell" v-for="category in categories" :key="category.id">
          <router-link
            class="navigate-right"
            v-bind:to="'/language/' + langId + '/category/' + category.id + '/words'">
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { LANGUAGE_MAP, CATEGORY_MAP } from '@/Const.js';

export default {
    name: 'language',
    props: ['langId'],
    computed: {
        categories() {
            return Object.values(CATEGORY_MAP)
                .sort((a, b) => a.id - b.id)
                .filter(val => val.langId === this.langId);
        },
        languageMap() {
            return LANGUAGE_MAP;
        },
    },
};
</script>
