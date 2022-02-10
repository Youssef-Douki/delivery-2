<script>
import Sidebar from './components/sidebar/Sidebar'
import { sidebarWidth } from '../src/components/sidebar/state'
export default {
  components: { Sidebar },
  // setup() {
  //   return { sidebarWidth }
  // }
}
</script>
<template>
  <div id="nav">
    <Sidebar/>
    <router-view/>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  /* background-image: url("../public/img1.jpg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
