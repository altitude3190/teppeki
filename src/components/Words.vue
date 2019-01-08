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
      <h1 class="title">{{ CATEGORY[categoryId].name }}</h1>
    </header>
    <div class="content">
    <ul class="table-view">
      <Word v-for="word in filterdWords" v-bind:word="word" />
    </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue';
import words from "../data/words";
import Word from "./Word";
import CONST  from "../Const"

export default {
  name: 'app',
  components: {
    Word,
  },
  data() {
    return {
      words,
      CATEGORY: CONST.CATEGORY
    }
  },
  computed: {
    langId () {
      // We will see what `params` is shortly
      return this.$route.params.langId
    },
    categoryId () {
      // We will see what `params` is shortly
      return this.$route.params.categoryId
    },
    filterdWords() {
      return this.words.filter(word => word.langId == this.langId && word.categoryId == this.categoryId)
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
