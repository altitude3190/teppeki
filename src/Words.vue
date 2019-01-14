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
      <h1 class="title">{{ categoryMap[categoryId].name }}</h1>
    </header>
    <div class="content">
    <ul class="table-view">
      <Word v-for="word in dispWords" v-bind:word="word" :key="word.id" />
    </ul>
    </div>
  </div>
</template>

<script>
import WORD_DATA from '@/data/Words.js';
import Word from '@/components/Word.vue';
import { CATEGORY_MAP } from '@/Const.js';

export default {
    name: 'words',
    props: ['langId', 'categoryId'],
    components: {
        Word,
    },
    computed: {
        dispWords() {
            return WORD_DATA.filter(
                word => word.langId === this.langId && word.categoryId === this.categoryId,
            );
        },
        categoryMap() {
            return CATEGORY_MAP;
        },
    },
};
</script>
