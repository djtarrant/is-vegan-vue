<template>
  <div id="app">
    <Header />
    <IsVeganForm v-on:query-updated="updateQuery($event)" />
    <IsVegan v-bind:query="queryParent || 'pasta'" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import IsVegan from './components/IsVegan.vue'
import IsVeganForm from './components/IsVeganForm.vue'



export default {
  name: 'App',
  components: {
    Header,
    IsVeganForm, 
    IsVegan
  },
  data(){
      return{
        queryParent:null
      }
  },
  methods: {
    updateQuery(queryChild){
      console.log('Child:'+queryChild);
      this.queryParent = queryChild;
      console.log('Parent:'+this.queryParent);
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
