<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png"
        aria-hidden="true" />
    </div>
    <div class="get-sarted">
      <router-link to="/build">Get Started</router-link > Building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home{
  text-align: center;
}
.robot{
  height: 300px;
}

</style>
