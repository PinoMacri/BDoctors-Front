<script>
import DoctorsList from "../components/doctors/DoctorsList.vue";
import Jumbotron from "../components/macro-sections/Jumbotron.vue";
import axios from "axios";
import { store } from "../data/store";

const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "HomePage",
  components: { DoctorsList, Jumbotron },
  data() {
    return {
      store,
      doctors: [],
    };
  },

  methods: {
    fetchGames(endpoint = null) {
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
  },
  created() {
    this.fetchGames();
  },
};
</script>

<template>
  <Jumbotron />
  <div class="container">
    <DoctorsList :doctors="doctors" />
  </div>
</template>

<style scoped lang="scss"></style>
