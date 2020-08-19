<template>
  <div id="isVeganForm">
    <form>
      <label for="query">Enter Food:</label>
      <input type="text" id="query" v-model="query">
      <button @click="handleSubmit()">Check if it is Vegan?</button>  
    </form>
  </div>
</template>

<script>

export default {
  name: 'IsVeganForm',
  components: {
  },
  data(){
      return{
          query:null
      }
  },
  methods:{
      handleSubmit(){
          console.log("Query:"+query);
      }
  },
  mounted: function(){

  }
}
</script>

<style>
#isVeganForm {
}
</style>