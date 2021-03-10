<template>
  <div id="app">
    <div>
      <Navbar></Navbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default{
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
.test {
  font-size: 16px;
}
</style>
