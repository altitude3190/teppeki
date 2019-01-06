
<template>
  <div id="app">
    <header class="bar bar-nav">
      <h1 class="title">Flashcards</h1>
    </header>
    <div class="content">
      <ul class="table-view">
        <li class="table-view-divider">Languages</li>
        <li class="table-view-cell" v-for="language in languages">
          <router-link class="navigate-right" v-bind:to="'/language/' + language.id">{{ language.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
/* eslint-disable */
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
