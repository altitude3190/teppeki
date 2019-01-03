<template>
  <li class="list-group-item p-3">
    <div class="d-flex flex-row bd-highlight">
      <div class="bd-highlight flex-grow-1">
        <p class="m-0 p-0 text-dark"><span>{{ word }}</span><span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{{ ruby }}</span></p>
        <p class="m-0 p-0 text-secondary"><span>{{ meaning }}</span></p>
      </div>
      <div class="bd-highlight align-self-center">
        <i style="font-size:1.3em" class="fas fa-check-square"></i>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Word',
  props: {
    word: String,
    ruby: String,
    meaning: String,
  },
};
</script>