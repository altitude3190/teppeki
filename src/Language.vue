<template>
  <div id="app">
    <header class="bar bar-nav">
      <router-link to="/">
        <button class="btn pull-left">
          HOME
        </button>
      </router-link>
      <router-link v-bind:to="'/language/' + langId + '/registered/words'">
        <button class="btn pull-right">
          登録単語
        </button>
      </router-link>
      <h1 class="title">{{ languageMap[langId].name }}</h1>
    </header>
    <div class="content">
      <ul class="table-view">
        <template v-for="category in categories">
          <li class="table-view-divider" :key="category.id">{{ category.name }}</li>
          <!--eslint-disable-next-line-->
          <li class="table-view-cell" v-for="posGroup in posGroups">
            <router-link
              class="navigate-right"
              v-bind:to="
                '/language/' + langId + '/category/' + category.id +
                '/posgroup/' + posGroup.id + '/words'
              ">
              {{ category.name }} {{ posGroup.name }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { LANGUAGE_MAP, CATEGORY_MAP, POS_GROUP_MAP } from './Const';

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
        posGroups() {
            return Object.values(POS_GROUP_MAP)
                .sort((a, b) => a.id - b.id);
        },
    },
};
</script>
