<template>
  <div>
      <header class="header">
        <strong>
        </strong>
        <nav class="nav">
          <g-link to="/">Bosque</g-link>
          <g-link class="nav__link" to="/about/">Quien</g-link>
        </nav>
      </header>
      <div class="layout">
        <slot />
      </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    metaInfo: {
      title: 'Bosque R.E.A.L'
    }
  };

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Vollkorn&display=swap');
body,
p,
a {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  /*font-family: "Digestive Condensed" !important;*/
}
p,
a,
h1,
h2,
h3,
h4,
h5 {
  margin-top: 0rem;
  margin-bottom: 1rem;
  font-family: Vollkorn;
}
p{
  line-height: 1.3rem;
  font-family: Vollkorn;
}

img {
 max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
}
/*

.main-content {
  background-image: url("~@/assets/images/bosque_real_peq.jpg");
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
}
*/

.main-content {
  position: relative;
  overflow: scroll;
  height: auto;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.main-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
}

.layout {
  margin: 0 auto;
  padding-top: 50px;
  max-width: 600px;
  /*background-color: green;*/
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 50px;
  z-index: 10;
  a{
    color: black;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  .nav{
    background-color: white;
    padding: 10px;
  }
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
  .parallax{
    position: fixed;
  }
</style>
