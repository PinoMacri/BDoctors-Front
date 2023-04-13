<script>
import { store } from "../data/store";
import DoctorsCard from "../components/doctors/DoctorsCard.vue";
import axios from "axios";
const apiBaseUrl = "http://127.0.0.1:8000/api";
const apiBaseUrlSpec = "http://localhost:8000/api/specializations";
const apiBaseUrlVote = "http://localhost:8000/api/votes";
export default {
  name: "Ricerca",
  components: { DoctorsCard },
  data() {
    return {
      store,
      doctors: [],
      specializations: [],
      name: "",
      address: "",
      specialization: "",
      voto: 0,
      votes: [],
      city: "",
      media: 0,
      id: 0,
      recensione: "",
      reviews: 0,
      reviewNumber: 0,
    };
  },
  methods: {
    fetchDoctors(endpoint = null) {
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      if (!endpoint) endpoint = apiBaseUrl + "/doctors";
      axios
        .get(endpoint)
        .then((res) => {
          // In res.data arrivano i dati della chiamata da axios
          this.doctors = res.data;
        })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          console.error(err);
        });
    },
    updateName() {
      this.store.name = this.name;
    },
    updateAddress() {
      this.store.address = this.address;
    },
    updateSpecialization() {
      this.store.specialization = this.specialization;
    },
    updateCity() {
      this.store.city = this.city;
    },
    updateVote() {
      this.store.city = this.city;
    },
    onButtonClicked() {
      this.updateName();
      this.updateAddress();
      this.updateSpecialization();
      this.updateCity();
    },

    fetchSpecializations() {
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      axios
        .get(apiBaseUrlSpec)
        .then((res) => {
          // In res.data arrivano i dati della chiamata da axios
          this.specializations = res.data;
        })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          console.error(err);
        });
    },
    fetchVotes() {
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      axios
        .get(apiBaseUrlVote)
        .then((res) => {
          // In res.data arrivano i dati della chiamata da axios
          this.votes = res.data;
        })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          console.error(err);
        });
    },
    // sortByReview() {
    //   if (this.recensione === "max") {
    //     this.store.review.sort((a, b) => a - b);
    //     console.log(this.store.review);
    //   } else if (this.recensione === "min") {
    //     this.store.review.sort((a, b) => b - a);
    //     console.log(this.store.review);
    //   } else {
    //     console.log(this.store.review);
    //   }
    // },
  },
  computed: {
    filter() {
      if (this.store.name && this.store.city && this.store.specialization) {
        return this.doctors.filter((doctor) => {
          return (
            doctor.user.name
              .toLowerCase()
              .includes(this.store.name.toLowerCase()) &&
            doctor.city.toLowerCase().includes(this.store.city.toLowerCase()) &&
            doctor.specializations
              .map((specialization) => {
                return specialization.name.toLowerCase();
              })
              .includes(this.store.specialization.toLowerCase())
          );
        });
      } else if (this.store.name) {
        return this.doctors.filter((doctor) => {
          return doctor.user.name
            .toLowerCase()
            .includes(this.store.name.toLowerCase());
        });
      } else if (this.store.city) {
        return this.doctors.filter((doctor) => {
          return doctor.city
            .toLowerCase()
            .includes(this.store.city.toLowerCase());
        });
      } else if (this.store.specialization) {
        return this.doctors.filter((doctor) => {
          return doctor.specializations
            .map((specialization) => {
              return specialization.name.toLowerCase();
            })
            .includes(this.store.specialization.toLowerCase());
        });
      } else return this.doctors;
    },
  },
  created() {
    this.fetchDoctors();
    this.fetchSpecializations();
    this.fetchVotes();
  },
};
</script>

<template>
  <div class="container">
    <h3 class="text-danger mt-4 mb-5 text-center">
      Tutti i nostri Specialisti
    </h3>
    <div class="d-flex justify-content-between">
      <div>
        <form @submit.prevent class="d-flex filtri" action="">
          <div>
            <input
              class="nome-dottore"
              v-model.trim="name"
              placeholder="Nome Dottore"
              type="text"
            />
          </div>
          <div class="citta-dottore">
            <input v-model.trim="city" placeholder="Città" type="text" />
          </div>
          <div class="specializzazione-dottore">
            <select
              v-model="specialization"
              class="specializzazione"
              aria-label="Default select example"
            >
              <option value="" selected>Specializzazione</option>
              <option v-for="specialization in specializations">
                {{ specialization.name }}
              </option>
            </select>
          </div>
          <button @click="onButtonClicked">Cerca</button>
        </form>
      </div>

      <div>
        <select
          v-model="voto"
          class="specializzazione"
          aria-label="Default select example"
        >
          <option :value="0" selected>Voto</option>
          <option :value="vote.value" v-for="vote in votes">
            {{ vote.label }}
          </option>
        </select>

        <select
          v-model="reviewNumber"
          class="specializzazione"
          aria-label="Default select example"
        >
          <option :value="0" selected>Recensioni</option>
          <option :value="0">Tutti</option>
          <option :value="2">Più di 2 recensioni</option>
          <option :value="4">Più di 4 recensioni</option>
        </select>
      </div>
    </div>

    <div class="doctors-list d-flex justify-content-start flex-wrap mb-5">
      <DoctorsCard
        v-for="(doctor, i) in filter"
        :key="doctor.id"
        :doctor="doctor"
        :voto="voto"
        :reviewNumber="reviewNumber"
      />
    </div>
  </div>
</template>

<style></style>
