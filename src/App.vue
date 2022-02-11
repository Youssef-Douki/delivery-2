//
<script>
import Sidebar from "./components/sidebar/Sidebar";
import { sidebarWidth } from "../src/components/sidebar/state";
export default {
  components: { Sidebar },
  // setup() {
  //   return { sidebarWidth }
  // }
};
</script>
<template>
  <div id="nav">
    <Sidebar />
    <router-view />
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
  padding: 55px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: black;
}
body {
  background-image: url("../src/components/img2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
