<script>
import DoctorsCard from "./DoctorsCard.vue";

export default {
  name: "HomePage",
  props: { doctors: Array },
  components: { DoctorsCard },
};
</script>

<template>
  <div class="completed-list">
    <h3 class="text-danger mt-4 mb-5 text-center">Dottori in evidenza</h3>
    <h1 class="text-center pt-5">CARD ANDREA</h1>
    <div class="doctors-list d-flex justify-content-start flex-wrap mb-5">
      <DoctorsCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.completed-list {
  border: 1px solid black;
  height: 600px;
}

.doctors-list {
  gap: 15px;
  margin: 0 auto;
}
</style>
