<script>
import Form from "../components/Form.vue";
import DoctorsList from "../components/doctors/DoctorsList.vue";
import DoctorDetailPage from "./doctors/DoctorDetailPage.vue";

export default {
  name: "HomePage",
  components: { DoctorsList, DoctorDetailPage, Form },
};
</script>

<template>
  <!-- <DoctorsList /> -->
  <!-- <DoctorDetailPage /> -->
  <Form />
</template>

<style></style>
