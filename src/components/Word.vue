<template>
  <li class="list-group-item p-3">
    <div class="d-flex flex-row bd-highlight">
      <div class="bd-highlight flex-grow-1">
        <p class="m-0 p-0 text-dark"><span>{{ word.word }}</span><span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{{ word.ruby }}</span></p>
        <p class="m-0 p-0 text-secondary"><span>{{ word.meaning }}</span></p>
      </div>
      <div class="bd-highlight align-self-center" v-on:click="toggleCheck">
        <i style="font-size:1.3em" v-bind:class="checkboxClass"></i>
      </div>
    </div>
  </li>
</template>

<script>
import repos from '../lib/localStrageRepos'


export default {
  name: 'Word',
  props: ['word'],
  data() {
      return {
          checkboxClass: 'far fa-square'
      }
  },
  created() {
    //   this.checkboxClass = 'fas fa-plus-square'
      this.checkboxClass = this.isSaved() ? 'fas fa-plus-square' : 'far fa-square'
  },
  methods: {
      toggleCheck(e) {
          if (this.checkboxClass === 'far fa-square') {
              this.checkboxClass = 'fas fa-plus-square'
                repos.addUncheckedWord(this.word.langId, this.word.id)
          } else {
              this.checkboxClass = 'far fa-square'
              repos.deleteUncheckedWord(this.word.langId, this.word.id)
          }
      },
      isSaved() {
          return repos.getUncheckedWords(this.word.langId)[this.word.id] ? true : false
      }
  }

};
</script>