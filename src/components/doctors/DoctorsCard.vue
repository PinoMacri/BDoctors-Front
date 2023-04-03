<script>
export default {
  name: "DoctorsCard",
  props: {
    doctor: Object,
  },
};
</script>

<template>
  <!-- vedi se va -->
  <router-link :to="{ name: 'doctor-detail', params: { id: doctor.id } }">
    <div class="card doctor-card text-bg-dark">
      <img
        v-if="!doctor.photo"
        src="https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        class="card-img"
        alt="..."
      />
      <img v-else :src="doctor.photo" class="card-img" alt="..." />
      <div class="card-img-overlay overlay">
        <h5 class="card-title text-center h3">{{ doctor.user.name }}</h5>
        <div class="d-flex justify-content-center mt-4">
          <div
            v-for="specialization in doctor.specializations"
            class="badge me-3"
            :style="{ backgroundColor: specialization.color }"
          >
            {{ specialization.name }}
          </div>
        </div>
        <div class="doctor-info">
          <p class="card-text">{{ doctor.address }}</p>
          <p class="card-text">+39 {{ doctor.phone }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.doctor-card {
  width: 400px;
  position: relative;
  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;

    transition: background-color 0.5s;
  }
  .card-img-overlay {
    padding-top: 25px;
    padding-left: 25px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      transition: background-color 0.5s;
    }
    .doctor-info {
      text-align: center;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
