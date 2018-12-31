
<template>
  <div id="app">
    <router-link to="/foo">Home</router-link>
    <p>home page</p>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <ul id="example-1">
  <li v-for="category in filteredCategories">

    {{ category.name }}
  </li>
</ul>


    <!--<router-view></router-view>-->

  </div>
</template>
<!--
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
-->

<script>
// import HelloWorld from './components/HelloWorld.vue';
import firebase from "firebase";
import { firestore } from "firebase";
export default {
  name: 'app',
  data() {
    return {
      categories: [
        {
          id: 101,
          langId: 1,
          name: "TOEIC1"
        },
        {
          id: 102,
          langId: 1,
          name: "TOEIC2"
        },
        {
          id: 103,
          langId: 1,
          name: "TOEIC2"
        },
        {
          id: 104,
          langId: 1,
          name: "TOEIC3"
        },
        {
          id: 201,
          langId: 2,
          name: "HSK1級"
        },
        {
          id: 202,
          langId: 2,
          name: "HSK2級"
        },
        {
          id: 203,
          langId: 2,
          name: "HSK3級"
        },
        {
          id: 204,
          langId: 2,
          name: "HSK4級"
        },
        {
          id: 205,
          langId: 2,
          name: "HSK5級"
        },
        {
          id: 206,
          langId: 2,
          name: "HSK6級"
        }
      ],
      filteredCategories: []
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
    this.filteredCategories = this.categories.filter(category => category.langId == this.langId)
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
