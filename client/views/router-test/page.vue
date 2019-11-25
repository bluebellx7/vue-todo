<template>
  <div>
    <ul>
      <li><router-link :to="{ name:'page1' }">page1</router-link></li>
      <li><router-link :to="{ name:'page2',  params: {id: 1} }">page2 id1</router-link></li>
      <li><router-link :to="{ name:'page2',  params: {id: 2} }">page2 id2</router-link></li>
      <li><router-link :to="{ name:'page2',  params: {id: 3} }">page2 id3</router-link></li>
      <li><router-link :to="{ name:'page2',  params: {id: 4} }">page2 id4</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  a
    color white
</style>
