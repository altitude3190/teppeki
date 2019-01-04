
<template>
  <div id="app">
  <ul class="list-group">
    <li class="list-group-item p-3">
    <div class="d-flex flex-row bd-highlight">
      <div class="bd-highlight flex-grow-1">
        <p class="m-0 p-0 text-dark"><span>Flex item</span><span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;ai</span></p>
        <p class="m-0 p-0 text-secondary"><span>1hoge</span></p>
      </div>
      <div class="bd-highlight align-self-center"><i style="font-size:1.3em" class="fas fa-check-square"></i></div>
    </div>
    </li>
    <li class="list-group-item p-3">
    <div class="d-flex flex-row bd-highlight">
      <div class="bd-highlight flex-grow-1">
        <p class="m-0 p-0">Flex item</p>
        <p class="m-0 p-0">1hoge</p>
      </div>
      <div class="bd-highlight align-self-center"><i style="font-size:1.3em" class="far fa-square"></i></div>
    </div>
    </li>
    <li class="list-group-item p-3">
    <div class="d-flex flex-row bd-highlight">
      <div class="bd-highlight flex-grow-1">
        <p class="m-0 p-0">Flex item</p>
        <p class="m-0 p-0">1hoge</p>
      </div>
      <div class="bd-highlight align-self-center"><input class="position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></div>
    </div>
    </li>
  </ul>
  <div class="list-group">
    <div class="list-group-item">
      <p class="list-group-item-heading">見出しＡ</p>
      <p class="list-group-item-text">段落Ａ</p>
    </div>
    <div class="d-flex list-group-item">
      <h4 class="list-group-item-heading">見出しＡ</h4>
      <p class="list-group-item-text">段落Ａ</p>
      <div class="w-100">
      <span>Flex item</span><hr>
      <span>hoge</span>
      </div>
      <div class="flex-shrink-1 bd-highlight">Flex item</div>
    </div>
    <div class="list-group-item list-group-item-action">
      <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
        <h5>List group item heading</h5>
        <h5>List group item heading</h5>
        <small>3 days ago</small>
        <div class="input-group-append">
          hoge
        </div>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </div>
  </div>
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

  <!--<router-view></router-view>-->
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
