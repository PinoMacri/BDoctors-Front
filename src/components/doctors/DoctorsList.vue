<script>
import DoctorsCard from "./DoctorsCard.vue";


export default {
  name: "DoctorsList",
  props: { doctors: Array },
  components: { DoctorsCard },
  data() {
    return {
      voto: 0,
      reviewNumber: 0,
    };
  },
};
</script>

<template>
  <div class="completed-list">
    <h3 class="text-danger mt-4 mb-5 text-center">Dottori in evidenza</h3>
    <div class="doctors-list d-flex justify-content-center flex-wrap mb-5">
      <DoctorsCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" :voto="voto"
        :reviewNumber="reviewNumber" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.doctors-list {
  gap: 15px;
  margin: 0 auto;
}
</style>
