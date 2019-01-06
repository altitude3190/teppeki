<template>
  <li class="table-view-cell">
    <div class="media-body">
      <span>{{ word.word }}</span><span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{{ word.ruby }}</span>
      <p><span>{{ word.meaning }}</span></p>
    </div>
    <button v-bind:class="'btn ' + pressStateClass" v-on:click="toggleCheck"><span class="icon icon-close"></span></button>
  </li>
</template>

<script>
import repos from '../lib/localStrageRepos'
// class="btn btn-negative"

export default {
  name: 'Word',
  props: ['word'],
  data() {
      return {
          pressStateClass: ''
      }
  },
  created() {
    //   this.pressStateClass = 'btn-negative'
      this.pressStateClass = this.isSaved() ? 'btn-negative' : ''
  },
  methods: {
      toggleCheck(e) {
          if (this.pressStateClass === '') {
              this.pressStateClass = 'btn-negative'
                repos.addUncheckedWord(this.word.langId, this.word.id)
          } else {
              this.pressStateClass = ''
              repos.deleteUncheckedWord(this.word.langId, this.word.id)
          }
      },
      isSaved() {
          return repos.getUncheckedWords(this.word.langId)[this.word.id] ? true : false
      }
  }

};
</script>