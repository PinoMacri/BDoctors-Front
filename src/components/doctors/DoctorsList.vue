<script>
import DoctorsCard from "./DoctorsCard.vue";

export default {
  name: "HomePage",
  data: () => {
    return {
      doctors: [],
    };
  },
  components: { DoctorsCard },
};
</script>

<template>
  <h3 class="text-danger mt-4 mb-3 text-center">Dottori in evidenza</h3>
  <div class="doctors-list d-flex flex-wrap justify-content-center mb-5">
    <DoctorsCard />
  </div>
</template>

<style scoped lang="scss">
.doctors-list {
  gap: 15px;
}
</style>
