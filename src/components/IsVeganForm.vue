<template>
  <div id="isVeganForm">
    <form>
      <label for="query">Enter Food:</label>
      <input type="text" id="query" v-model="query" autocomplete="false">
      <button @click.prevent="handleSubmit()">Check if it is Vegan?</button>  
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
          console.log("Query:"+this.query);
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