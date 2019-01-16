
<template>
  <div id="app">
    <header class="bar bar-nav">
      <router-link to="/">
        <button class="btn pull-left">
          HOME
        </button>
      </router-link>
      <h1 class="title">Not Found</h1>
    </header>
    <div class="content">
      <div class="content-padded">
        <h3 style="text-align:center; padding-top:30px">404</h3>
        <p style="text-align:center">The requested page is not found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'notFound',
};
</script>
