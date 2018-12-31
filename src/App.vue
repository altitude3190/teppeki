<template>
  <div id="app">
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Flashcards</h1>
    <p class="lead">A simple flashcards app.</p>
  </div>
</div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h3>languages</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="language in languages">
        <router-link v-bind:to="'/language/' + language.id">{{ language.name }}</router-link>
      </li>
    </ul>
  </a>
  <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      languages: [
        {
          id: 1,
          name: "英語"
        },
        {
          id: 2,
          name: "中国語"
        }
      ]
    };
  }
};
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
