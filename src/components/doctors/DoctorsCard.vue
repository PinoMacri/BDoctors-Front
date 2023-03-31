<script>
export default {
  name: "DoctorsCard",
};
</script>

<template>
  <div v-if="!isDetail" class="card doctor-card text-bg-dark">
    <img
      src="https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
      class="card-img"
      alt="..."
    />
    <div class="card-img-overlay overlay">
      <h5 class="card-title h3">Doctors name</h5>
      <p class="card-text ps-1">Doctors description</p>
      <div class="doctor-info">
        <p class="card-text">Doctors location</p>
        <p class="card-text"><small>vote</small></p>
      </div>
    </div>
  </div>
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
