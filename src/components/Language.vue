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
      <h1 class="title">{{ LANGUAGE[langId].name }}</h1>
    </header>
    <div class="content">
      <ul class="table-view">
        <li class="table-view-cell" v-for="category in categories">
          <router-link class="navigate-right" v-bind:to="'/language/' + langId + '/category/' + category.id + '/words'">
          {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CONST from "../Const"

export default {
  name: 'app',
  data() {
    return {
      LANGUAGE: CONST.LANGUAGE,
      CATEGORY: CONST.CATEGORY,
    }
  },
  computed: {
    langId () {
      return this.$route.params.langId
    },
    categories() {
      return Object.values(this.CATEGORY)
        .sort((a, b) => { return a.id - b.id })
        .filter(val => val.langId == this.langId)
    }
  }
};
</script>
