<script>
import Form from "../components/Form.vue";
import DoctorsList from "../components/doctors/DoctorsList.vue";
import DoctorDetailPage from "./doctors/DoctorDetailPage.vue";
import { store } from "../data/store";

export default {
  name: "HomePage",
  components: { DoctorsList, DoctorDetailPage, Form },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- <DoctorsList /> -->
  <!-- <DoctorDetailPage /> -->

  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <a v-if="store.isRegistered" class="navbar-brand" href="#"
        >modifica profilo</a
      >
      <a v-if="!store.isRegistered" class="navbar-brand" href="#">registered</a>
    </div>
  </nav> -->

  <!-- <Form /> -->
</template>

<style></style>
