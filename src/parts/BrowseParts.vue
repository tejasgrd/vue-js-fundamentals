<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <router-link :to="{name: 'BrowsHeads'}">Heads </router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowsArms'}">Arms </router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowsTorsos'}">Torsos </router-link>
      </li>
      <li>
        <router-link :to="{name: 'BrowsBases'}">Bases </router-link>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>
