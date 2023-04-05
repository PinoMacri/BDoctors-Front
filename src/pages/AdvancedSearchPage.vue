<script>
import { store } from "../data/store";
import DoctorsCard from "../components/doctors/DoctorsCard.vue";
import axios from "axios";

const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "AdvancedSearch",
  components: { DoctorsCard },
  data() {
    return {
      store,
      doctors: [],
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
        // Controllo con catch se ci sono errori
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {
    filter() {
      if (this.store.name) {
        return this.doctors.filter((doctor) => {
          return doctor.user.name
            .toLowerCase()
            .includes(this.store.name.toLowerCase());
        });
      }
    },
  },
  created() {
    this.fetchDoctors();
  },
};
</script>

<template>
  <div class="container">
    <h3 class="text-danger mt-4 mb-5 text-center">Dottori Trovati</h3>
    <div class="doctors-list d-flex justify-content-start flex-wrap mb-5">
      <DoctorsCard
        v-for="(doctor, i) in filter"
        :key="doctor.id"
        :doctor="doctor"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.doctors-list {
  gap: 15px;
  margin: 0 auto;
}
</style>
