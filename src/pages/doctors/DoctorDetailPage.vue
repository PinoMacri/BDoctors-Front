<script>
import ReviewCard from "../../components/ReviewCard.vue";

export default {
  name: "DoctorDetail",
  data: () => {
    return {
      location: "Roma, via dei gerani 12, Rm",
    };
  },
  components: { ReviewCard },
  methods: {
    formatAddress() {
      const location = this.location.split(" ").join("+").split(",+").join("%");
      const address = `https://www.google.com/maps/search/?api=1&query=${location}`;
      return address;
    },
  },
};
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mt-3">
    <div class="user d-flex align-items-center">
      <div class="circle"></div>
      <div class="info me-5 ms-4">
        <h1 class="mt-3">Doctor Name</h1>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <div
          class="specialization-list d-flex justify-content-start align-items-center mt-4"
        >
          <div class="d-flex">
            <div class="badge" style="background-color: blue">Chirurgia</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contacts">
      <h4 class="phone mt-3">Phone: +39 388888888</h4>
      <h6 class="location me-5">Location: Roma, via dei gerani 12</h6>
      <a :href="formatAddress()" target="_blank" class="location me-5"
        >View on map</a
      >
    </div>
  </div>
  <hr />
  <ReviewCard />
  <hr />
</template>

<style scoped lang="scss">
.circle {
  margin: 0 20px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url("https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.specialization {
  font-size: 14px;
}
.badge {
  border-radius: 50px;
  padding: 5px 10px;
}
</style>
