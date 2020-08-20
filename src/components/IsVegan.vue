<template>
  <div id="isVegan">
    <h2>Food Listing</h2>
    <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Vegan?</td>
            <td>Caveats</td>
        </tr>
        <tr v-for="(foodItem) in foodItems"
        :key="foodItem.id">
            <td>{{ foodItem.id }}</td>
            <td>{{ foodItem.name }}</td>
            <td>{{ foodItem.isVegan? 'Yes':'No' }}</td>
            <td>{{ foodItem.caveats }}</td>
        </tr>
    </table>
  </div>
</template>

<script>


export default {
  name: 'IsVegan',
  components: {
  },
  data(){
      return{
          foodItems:[],
          url:`http://localhost:5000/isVegan/`
      }
  },
  props:['query'],
  watch: { 
    query: function() { // watch it
      this.getFoodList();
    }
  },
  mounted: function() {
    this.getFoodList()
  },
  methods:{
    getFoodList(){
      console.log(this.url+this.query);
      fetch(this.url+this.query, { method:'get' })
      .then((response) => {
        return response.json();
      }
      )
      .then((response) => {
        console.log(response);
        this.foodItems = response.foodItems;
      })
    }
  }
}
</script>

<style>
#isVegan {
  text-align: left;
}
</style>