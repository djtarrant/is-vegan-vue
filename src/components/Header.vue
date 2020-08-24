<template>
  <div id="header">
    <h1>IsVegan Vue Application</h1>
    <ul>
      <li><router-link to = "/">Home</router-link></li>
      <li><router-link to = "/foodItem">Foods</router-link></li>
      <li><router-link to = "/category">Categories</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
#header {
}
</style>