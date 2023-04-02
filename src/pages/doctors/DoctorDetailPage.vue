<script>
import ReviewCard from "../../components/ReviewCard.vue";
import axios from "axios";
const apiBaseUrl = "http://localhost:8000/api/";

export default {
  name: "DoctorDetail",
  data: () => {
    return {
      doctor: [],
    };
  },
  components: { ReviewCard },
  methods: {
    getDoctor() {
      const endpoint = apiBaseUrl + "doctors/" + this.$route.params.id;
      axios
        .get(endpoint)
        .then((res) => {
          this.doctor = res.data;
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        });
    },
  },
  computed: {
    formatAddress() {
      const location = this.doctor.address;
      location.split(" ").join("+").split(",+").join("%");
      const address = `https://www.google.com/maps/search/?api=1&query=${location}`;
      return address;
    },
  },
  created() {
    this.getDoctor();
  },
};
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mt-3">
    <div class="user d-flex align-items-center">
      <div class="circle">
        <img v-if="this.doctor.photo" :src="this.doctor.photo" alt="" />
        <img
          v-else
          src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
          alt=""
        />
      </div>
      <div class="info me-5 ms-4">
        <h1 class="mt-3">{{ doctor.user.name }}</h1>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <i class="fa-solid fa-star" style="color: #faf200"></i>
        <div
          class="specialization-list d-flex flex-wrap justify-content-start align-items-center mt-4"
        >
          <div
            v-for="specialization in doctor.specializations"
            class="badge me-3 mb-3"
            :style="{ backgroundColor: specialization.color }"
          >
            {{ specialization.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="contacts">
      <h4 class="phone mt-3">Phone: +39 {{ doctor.phone }}</h4>
      <h6 class="location me-5">Location: {{ doctor.address }}</h6>
      <a :href="formatAddress" target="_blank" class="location me-5"
        >View on map</a
      >
    </div>
  </div>
  <hr />
  <ReviewCard v-for="review in doctor.review" :review="review" />
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
