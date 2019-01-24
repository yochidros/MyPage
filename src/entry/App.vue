<template>
  <div id="app">
    <div class="nav">
      <div class="nav_item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: whitesmoke;
}
.nav {
  display: table;
  width: 100%;
  .nav_item {
    width: 50%;
    display: table-cell;

    a {
      display: block;
      font-weight: bold;
      margin: 10px 0;
      padding: 20px 10px;
      text-align: center;
      text-decoration: none;
      background-color: #3c8ab9;
      color: #FFFFFF;
      &.router-link-exact-active {
        color: #2c3e50;
        background-color: #4a6f9a;
      }
    }
  }
}
</style>
