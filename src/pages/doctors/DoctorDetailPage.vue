<script>
import ReviewCard from "../../components/ReviewCard.vue";
import VoteCard from "../../components/VoteCard.vue";
import axios from "axios";
const apiBaseUrl = "http://localhost:8000/api/";

export default {
  name: "DoctorDetailPage",
  data: () => {
    return {
      form: {
        vote_id: 0,
      },
      doctor: [],
      voto: 0,
      media: 0,
    };
  },
  components: { ReviewCard, VoteCard },
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
    changeVote() {
      this.form.vote_id = this.voto;
    },
    sendForm() {
      axios
        .post(`http://127.0.0.1:8000/api/doctors/${this.doctor.id}`, this.form)
        .then(() => {
          this.form = {
            vote_id: this.voto,
          };
          console.log(this.form);
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          location.href = `http://localhost:5174/doctors/${this.doctor.id}`;
        });
    },
    getStar() {
      let roundedMedia = Math.floor(this.media);
      let message = "";
      for (let i = 0; i < 5; i++)
        if (roundedMedia && i < roundedMedia) {
          message += " &#9733 ";
        } else message += " &#9734 ";
      return message;
    },
  },
  computed: {
    formatAddress() {
      const location = this.doctor.address;
      location.split(" ").join("+").split(",+").join("%");
      const address = `https://www.google.com/maps/search/?api=1&query=${location}`;
      return address;
    },
    getMedia() {
      let sum = 0;
      this.doctor.votes.forEach((vote) => {
        sum = sum + vote.value;
      });
      this.media = sum / this.doctor.votes.length;
      return this.media;
    },
  },
  created() {
    this.getDoctor();
  },
  mounted() {
    this.getMedia;
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
        <p class="stars" v-html="getStar()"></p>

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
    <div class="message-review-vote d-flex flex-column">
      <router-link
        :to="{ name: 'contact' }"
        class="btn btn-sm btn-primary me-3 mb-2"
        >Contact me</router-link
      >
      <router-link
        :to="{ name: 'review' }"
        class="btn btn-sm btn-secondary me-3 mb-2"
        >Leave a review</router-link
      >
    </div>
    <form @submit.prevent="sendForm" novalidate>
      <div class="d-flex flex-column me-3">
        <label for="vote" class="form-label"
          >Lascia un voto<sup class="text-danger">*</sup></label
        >
        <select
          @change="changeVote"
          v-model="voto"
          class="mb-2"
          aria-label="Default select example"
        >
          <option :value="0" selected>Voto</option>
          <option :value="1">Pessimo</option>
          <option :value="2">Discreto</option>
          <option :value="3">Buono</option>
          <option :value="4">Ottimo</option>
          <option :value="5">Eccellente</option>
        </select>
        <button type="submit" class="btn btn-primary p-1 align-self-center">
          Submit
        </button>
      </div>
    </form>
  </div>
  <div class="d-flex">
    <div class="review">
      <hr class="mt-0" />
      <ReviewCard v-for="review in doctor.review" :review="review" />
    </div>
    <div class="vote">
      <hr class="mt-0" />
      <VoteCard v-for="vote in doctor.votes" :vote="vote" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.review {
  width: 75%;
  border-right: 1px solid black;
  min-height: calc(100vh - 262px);
}

.vote {
  width: 25%;
  min-height: calc(100vh - 262px);
}

.stars {
  font-size: 22px;
  text-shadow: 1px 2px black;
  color: yellow !important;
}

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
