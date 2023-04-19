<script>
import { store } from "../data/store";
import DoctorsCard from "../components/doctors/DoctorsCard.vue";
import Footer from "../components/macro-sections/Footer.vue";
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";
const apiBaseUrl = "http://127.0.0.1:8000/api";
const apiBaseUrlSpec = "http://localhost:8000/api/specializations";
const apiBaseUrlVote = "http://localhost:8000/api/votes";
export default {
  name: "Ricerca",
  components: { DoctorsCard, AppLoader, Footer },
  data() {
    return {
      store,
      doctors: [],
      specializations: [],
      name: "",
      address: "",
      specialization: "",
      voto: 1,
      votes: [],
      city: "",
      media: 0,
      id: 0,
      isLoading: false,
      recensione: "",
      reviews: 0,
      reviewNumber: 0,
    };
  },
  methods: {
    fetchDoctors(endpoint = null) {
      this.isLoading = true;
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
        })
        .then(() => {
          this.isLoading = false;
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
      } else if (this.store.name && this.store.city) {
        return this.doctors.filter((doctor) => {
          return doctor.user.name
            .toLowerCase()
            .includes(this.store.name.toLowerCase()) &&
            doctor.city.toLowerCase().includes(this.store.city.toLowerCase());
        });
      }
      else if (this.store.name && this.store.specialization) {
        return this.doctors.filter((doctor) => {
          return doctor.user.name
            .toLowerCase()
            .includes(this.store.name.toLowerCase()) &&
            doctor.specializations
              .map((specialization) => {
                return specialization.name.toLowerCase();
              })
              .includes(this.store.specialization.toLowerCase())
        });
      }
      else if (this.store.city && this.store.specialization) {
        return this.doctors.filter((doctor) => {
          return doctor.city
            .toLowerCase()
            .includes(this.store.city.toLowerCase()) &&
            doctor.specializations
              .map((specialization) => {
                return specialization.name.toLowerCase();
              })
              .includes(this.store.specialization.toLowerCase())
        });
      }
      else if (this.store.name) {
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
    updateValue() {
      this.name = this.store.name;
      this.city = this.store.city;
      this.specialization = this.store.specialization;
    },
  },
  created() {
    this.fetchDoctors();
    this.fetchSpecializations();
    this.fetchVotes();
    this.updateValue;
  },
  // mounted() {
  //   this.filter;
  // },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div v-else class="ricerca-body">
    <div class="container">
      <h3 class="text-danger pt-5 mb-5 text-center">
        Tutti i nostri Specialisti
      </h3>
      <div class="d-lg-flex justify-content-between">
        <div class="mt-3 mb-3 mt-lg-0">
          <select v-model="voto" class="select-voto" aria-label="Default select example">
            <option :value="0" selected>Voto</option>
            <option :value="vote.value" v-for="vote in votes">
              {{ vote.label }}
            </option>
          </select>

          <select v-model="reviewNumber" class="select-recensione" aria-label="Default select example">
            <option :value="0" selected>Tutti</option>
            <option :value="2">Più di 2 recensioni</option>
            <option :value="6">Più di 6 recensioni</option>
            <option :value="8">Più di 8 recensioni</option>
            <option :value="10">Più di 10 recensioni</option>
            <option :value="12">Più di 12 recensioni</option>
          </select>
        </div>

        <div>
          <form @submit.prevent class="filtri" action="">
            <div class="d-flex">
              <div>
                <input class="nome-dottore" v-model.trim="name" placeholder="Nome Dottore" type="text" />
              </div>
              <div>
                <input class="citta-dottore" v-model.trim="city" placeholder="Città" type="text" />
              </div>
              <div class="specializzazione-dottore">
                <select v-model="specialization" class="specializzazione" aria-label="Default select example">
                  <option value="" selected>Specializzazione</option>
                  <option v-for="specialization in specializations">
                    {{ specialization.name }}
                  </option>
                </select>
              </div>
              <button class="d-none d-md-block" @click="onButtonClicked">
                Cerca
              </button>
            </div>
            <button class="d-md-none mt-3 ms-0" @click="onButtonClicked">
              Cerca
            </button>
          </form>
        </div>
      </div>

      <div class="doctors-list d-flex justify-content-center mt-3 justify-content-lg-start flex-wrap mb-5">
        <DoctorsCard v-for="(doctor, i) in filter" :key="doctor.id" :doctor="doctor" :voto="voto"
          :reviewNumber="reviewNumber" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.doctors-list {
  gap: 20px;
}

h3 {
  font-weight: bold;
}

input,
select {
  border: 1px solid black;
}

.ricerca-body {
  min-height: calc(100vh - 378px);
  background-image: linear-gradient(to bottom,
      rgb(109, 166, 212),
      rgb(255, 255, 255));
}

.select-recensione {
  height: 30px;
  border-radius: 0px 15px 15px 0px;
  width: 150px;
}

.select-voto {
  border-radius: 15px 0px 0px 15px;
  height: 30px;
  width: 150px;
}

.nome-dottore {
  border-radius: 15px 0px 0px 15px;
  height: 30px;
  width: 150px;
}

.citta-dottore {
  width: 150px;
  height: 30px;
}

.specializzazione {
  height: 30px;
  border-radius: 0px 15px 15px 0px;
  width: 150px;
}

button {
  border-radius: 15px;
  margin-left: 10px;
  padding: 0px 10px;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
