
<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
    <router-link class="navbar-brand m-0" to="/">
        <button type="button" class="btn btn-outline-secondary"><i class="fas fa-home"></i></button>
    </router-link>
    <span class="navbar-text">
      {{ LANGUAGE[langId].name }} 登録単語
    </span>
    <router-link class="navbar-brand m-0" v-bind:to="'/language/' + langId">
        <button type="button" class="btn btn-outline-secondary">{{ LANGUAGE[langId].name }} トップ</button>
    </router-link>
    </nav>
    <ul class="list-group">
      <Word v-for="word in filterdWords" v-bind:word="word" />
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue';
import words from "../data/words";
import Word from "./Word";
import repos from "../lib/localStrageRepos"
import CONST from "../Const"
export default {
  name: 'app',
  components: {
    Word,
  },
  data() {
    return {
      words,
      LANGUAGE: CONST.LANGUAGE
    }
  },
  computed: {
    langId () {
      // We will see what `params` is shortly
      return this.$route.params.langId
    },
    filterdWords() {
      const checkedWordsIdMap = repos.getUncheckedWords(this.langId)
      return this.words.filter(word => word.langId == this.langId && checkedWordsIdMap[word.id])
    }
  },
  created() {
    // console.log(categories)
    // this.filteredCategories = this.categories.filter(category => category.langId == this.langId)
  }
  /*created() {
    const config = {
	    databaseURL: "https://flashcards-66e00.firebaseio.com",
      projectId: "flashcards-66e00"
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(config);
    }
    // this.database = firebase.database();
    // this.todosRef = this.database.collection('words');
    // console.log(this.todosRef)
    var that = this
    const hoge = firebase.firestore().collection('words').where("lang_id", "==", 1).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.data())
        that.items.push(doc.data())
      })
    })
    // console.log(hoge);
  }*/
};
</script>
