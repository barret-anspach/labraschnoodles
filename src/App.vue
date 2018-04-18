<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import url("https://use.typekit.net/opf2muz.css");

  html, body {
    box-sizing: border-box;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  #app {
    font-family: 'essonnes-text', Bodoni, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgba(black, 0.8);
    padding: 60px 3pc;
    @media all and (min-width: 800px) {
      padding: 60px 2pc;
    }
  }
</style>
