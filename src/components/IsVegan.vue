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
const query = this.query;
//console.log(this.query);
const url = `http://localhost:5000/isVegan/${query}`;

export default {
  name: 'IsVegan',
  components: {
  },
  data(){
      return{
          foodItems:[]
      }
  },
  props:{
    query: {required:true, type: String, default: 'test'}
  },
  mounted: function(){
      fetch(url, { method:'get' })
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
</script>

<style>
#isVegan {
}
</style>