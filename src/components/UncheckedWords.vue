
<template>
  <div id="app">
    <ul class="list-group">
      <Word v-for="word in words" v-bind:word="word.word" v-bind:ruby="word.ruby" v-bind:meaning="word.meaning" />
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue';
import words from "../data/words";
import Word from "./Word";

export default {
  name: 'app',
  components: {
    Word,
  },
  data() {
    return {
      words
    }
  },
  computed: {
    langId () {
      // We will see what `params` is shortly
      return this.$route.params.langId
    },
    // filterdByLangId() {
    //   return this.data.categories.filters(category => category.id == langId())
    // }
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
