<template>
  <div id="app">
      <b-navbar class="header" toggleable="lg" type="dark">
          <b-navbar-brand >
              <router-link to="/">
                  <img class="icon" src="../assets/myIcon.png"  alt="yochidros-icon"/>
              </router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                  <b-nav-item>
                      <div class="nav_item">
                          <router-link to="/">Home</router-link>
                      </div>
                  </b-nav-item>
                  <b-nav-item href="#">
                      <div class="nav_item">
                          <router-link to="/about">About</router-link>
                      </div>
                  </b-nav-item>
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
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
        width: 100%;
        height: 100%;
    }
    .header {
        background: #3c8ab9;
    }
.icon {
  width: 48px;
  height: 48px;
}
.nav_item {
    a {
        font-weight: bold;
        margin: 10px 0;
        padding: 20px 10px;
        text-align: center;
        text-decoration: none;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #FFFFFF;
        }
    }
}
</style>
