<template>
  <li class="table-view-cell">
    <div class="media-body" v-on:click="toggleMeaning">
      <p class="word-number">{{ orderNum }}/{{ totalNum }}</p>
      <p>
        <span>{{ word.word }}</span>
        <span v-if="word.ruby">&nbsp;&nbsp;[ {{ word.ruby }} ]</span>
      </p>
      <p>
        <span v-if="shouldShowMeaning">{{ word.meaning }}</span>
        <br>
      </p>
    </div>
    <button v-bind:class="'btn ' + pressStateClass" v-on:click="toggleCheck">
      <span class="icon icon-close"></span>
    </button>
  </li>
</template>

<script>
import repos from '@/lib/localStrageRepos.js';

const BTN_PRESSED_CLASS_NAME = 'btn-negative';

export default {
    name: 'Word',
    props: ['word', 'orderNum', 'totalNum'],
    data() {
        return {
            pressStateClass: '',
            shouldShowMeaning: false,
        };
    },
    created() {
        this.pressStateClass = this.isSaved() ? BTN_PRESSED_CLASS_NAME : '';
    },
    methods: {
        toggleCheck() {
            if (this.pressStateClass === '') {
                this.pressStateClass = BTN_PRESSED_CLASS_NAME;
                repos.addUncheckedWord(this.word.langId, this.word.id);
            } else {
                this.pressStateClass = '';
                repos.deleteUncheckedWord(this.word.langId, this.word.id);
            }
        },
        isSaved() {
            return !!repos.getUncheckedWords(this.word.langId)[this.word.id];
        },
        toggleMeaning() {
            this.shouldShowMeaning = !this.shouldShowMeaning;
        },
    },
};
</script>
