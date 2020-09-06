<script src="https://npmcdn.com/vue@2.0.1/dist/vue.js"></script>
<script src="https://npmcdn.com/vue-router@2.0.0/dist/vue-router.js"></script>
<template>
  <div id="app">
    Root Foo  : {{rootFoo}} <br/>
    Robots Foo  : {{robotsFoo}} <br/>
    Users Foo  : {{usersFoo}} <br/>
    <br/>
    RootGetters Foo  : {{rootGetterFoo}} <br/>
    RobotsGetters Foo  : {{robotsGetterFoo}} <br/>
    UsersGetters Foo  : {{usersGetterFoo}} <br/>

    <header>
      <nav>
          <ul>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Home'}" exact>
                <img class="logo" src="./assets/build-a-bot-logo.png"/>
              Build-a-bot
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Build'}" exact>
                Build
              </router-link>
            </li>
            <li class="nav-item cart">
              <router-link class="nav-link" to="/cart" exact>
                Cart
              </router-link>
              <div class=" ">
                {{cart.length}}
              </div>
            </li>
          </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    rootFoo() {
      return this.$store.state.foo;
    },
    robotsFoo() {
      return this.$store.state.robots.foo;
    },
    usersFoo() {
      return this.$store.state.users.foo;
    },
    rootGetterFoo(){
      return this.$store.getters.foo;
    },
    robotsGetterFoo(){
      this.$store.getters['robots/foo'];
    },
    usersGetterFoo(){
      this.$store.getters['users/foo'];
    },
    cart(){
      return this.$store.state.robots.cart;
    }
  }
};
</script>

<style scoped>
</style>

<style>
body {
background : linear-gradient(to bottom , #555 , #999);
background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  float: right;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.cotainer {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  float: left;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  widows: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
