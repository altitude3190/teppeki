<template>
  <div id="app">
    <header class="bar bar-nav">
      <router-link to="/">
        <button class="btn pull-left">
          HOME
        </button>
      </router-link>
      <router-link v-bind:to="'/language/' + langId">
        <button class="btn pull-right">
          {{ languageMap[langId].name }}TOP
        </button>
      </router-link>
      <h1 class="title">{{ languageMap[langId].name }} 登録単語</h1>
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
import { LANGUAGE_MAP } from './Const';
import repos from './lib/localStrageRepos';

export default {
    name: 'words',
    props: ['langId'],
    components: {
        Word,
    },
    computed: {
        dispWords() {
            const checkedWordsIdMap = repos.getRegisteredWords(this.langId);
            return WORD_DATA.filter(
                word => word.langId === this.langId
                    && checkedWordsIdMap[word.id],
            );
        },
        languageMap() {
            return LANGUAGE_MAP;
        },
    },
};
</script>
