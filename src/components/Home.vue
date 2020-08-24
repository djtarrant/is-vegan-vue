<template>
  <div id="home">
    <IsVeganForm v-on:query-updated="updateQuery($event)" />
    <IsVegan v-bind:query="queryParent || 'pasta'" />
  </div>
</template>

<script>
import IsVegan from './IsVegan.vue'
import IsVeganForm from './IsVeganForm.vue'



export default {
  name: 'Home',
  components: {
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
#home {
  text-align: left;
}
</style>