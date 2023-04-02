<script>
import axios from "axios";
import Navbar from "./components/macro-sections/Navbar.vue"
export default {
  name: "App",
  components: { Navbar },
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style></style>
