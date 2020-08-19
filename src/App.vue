<template>
  <div id="app">
    <Header />
    <IsVeganForm />
    <IsVegan />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import IsVeganForm from './components/IsVeganForm.vue'
import IsVegan from './components/IsVegan.vue'


export default {
  name: 'App',
  components: {
    Header,
    IsVeganForm, 
    IsVegan
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
