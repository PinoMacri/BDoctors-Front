<script>
import DoctorsList from "../components/doctors/DoctorsList.vue";
import DoctorDetailPage from "./doctors/DoctorDetailPage.vue";

export default {
  name: "HomePage",
  components: { DoctorsList, DoctorDetailPage },
};
</script>

<template>
  <DoctorsList />
  <!-- <DoctorDetailPage /> -->
</template>

<style></style>
