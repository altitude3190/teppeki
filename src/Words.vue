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
      <h1 class="title">{{ categoryMap[categoryId].name }}</h1>
    </header>
    <div class="content">
    <ul class="table-view">
      <Word v-for="(word, index) in dispWords"
        v-bind:word="word" v-bind:orderNum="index + 1" v-bind:totalNum="dispWords.length"
        :key="word.id" />
    </ul>
    </div>
  </div>
</template>

<script>
import WORD_DATA from './data/Words';
import Word from '@/components/Word.vue';
import { CATEGORY_MAP, POS_GROUP_MAP } from './Const';

export default {
    name: 'words',
    props: ['langId', 'categoryId', 'posGroupId'],
    components: {
        Word,
    },
    computed: {
        dispWords() {
            const { posIds } = POS_GROUP_MAP[this.posGroupId];
            return WORD_DATA.filter(
                word => word.langId === this.langId
                    && word.categoryId === this.categoryId
                    && posIds.includes(word.posId),
            );
        },
        categoryMap() {
            return CATEGORY_MAP;
        },
    },
};
</script>
