
<template>
  <div id="app">
    <router-link to="/foo">Home</router-link>
    <p>home page</p>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <ul id="example-1">
  <li v-for="item in items">
    {{ item.lang_id }}
  </li>
</ul>


    <router-view></router-view>

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
      items: []
    }
  },
  created() {
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
  }
};
</script>
