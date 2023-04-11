<script>
import { store } from "../../data/store";
import axios from "axios";
export default {
  name: "DoctorsCard",
  props: {
    doctor: Object,
    voto: Number,
  },
  data() {
    return {
      store,
      name: "",
      address: "",
      specialization: "",
      sum: 0,
      media: 0,
    };
  },
  methods: {
    fill() {
      this.name = this.store.name.trim().toLowerCase();
      this.address = this.store.address.trim().toLowerCase();
      this.specialization = this.store.specialization.trim().toLowerCase();
    },
    fetchMedia() {
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      axios
        .get(`http://localhost:8000/api/votes/${this.doctor.id}/doctors`)
        .then((res) => {
          // In res.data arrivano i dati della chiamata da axios
          this.media = res.data;
        })

        .catch((err) => {
          console.error(err);
        });
    },
    getStar() {
      let message = "";
      for (let i = 0; i < 5; i++)
        if (this.media && i < this.media) {
          message += " &#9733 ";
        } else message += " &#9734 ";
      return message;
    },
  },
  computed: {
    getMedia() {
      let sum = 0;
      this.doctor.votes.forEach((vote) => {
        sum = sum + vote.value;
      });
      this.media = sum / this.doctor.votes.length;
      console.log(this.media);
      return this.media;
    },
  },
  created() {
    this.fill();
    this.getMedia;
  },
};
</script>

<template>
  <!-- vedi se va -->
  <div v-if="voto <= this.media || voto === 0">
    <router-link :to="{ name: 'doctor-detail', params: { id: doctor.id } }">
      <div class="card doctor-card text-bg-dark">
        <img
          v-if="!doctor.photo"
          src="https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
          class="card-img"
          alt="..."
        />
        <img
          v-else
          :src="'http://127.0.0.1:8000/storage/' + doctor.photo"
          class="card-img"
          alt="..."
        />
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
            <p class="card-text">{{ doctor.city }}</p>
            <p class="stars" v-html="getStar()"></p>
            <p class="card-text">+39 {{ doctor.phone }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.stars {
  color: yellow;
}
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
