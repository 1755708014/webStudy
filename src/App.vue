<template>
  <div id="app">
    <div id="nav">
      <h1 @click="changeName">用户名:  {{ $store.state.userName }}</h1>
      <h1 @click="changeName2">用户名:  {{ $store.state.userName }}</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$store)
  },
  methods: {
    changeName () {
      this.$store.commit('changeName', '100')
      this.$store.commit('changeName', '300')
      this.$store.commit('changeName', '200')
    },
    changeName2 () {
      this.$store.dispatch('changeNameActions')
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
