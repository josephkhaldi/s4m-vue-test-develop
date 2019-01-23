<template>
  <div id="app">    
    <Multiselect v-bind:list="users" v-bind:options="options"></Multiselect>
  </div>
</template>

<script>
import Multiselect from './components/Multiselect/Multiselect.vue';

export default {
  name: 'app',
  components: {
    Multiselect,
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },
  mounted() {
    this.$store.dispatch('get:users');
  },
  data : function(){
    let options = [{ id : '1337', name : 'test', username : 'pseudoTest'}];    
    options = []    
    return {
      options
    }
  }
};
</script>

<style lang="scss">
  @import "./assets/css/general.scss";
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
