<script>
import DoctorsList from "../components/doctors/DoctorsList.vue";
import DoctorDetailPage from "./doctors/DoctorDetailPage.vue";
import Jumbotron from "../components/macro-sections/Jumbotron.vue"
import SectionType1 from "../components/macro-sections/SectionType1.vue"
import SectionType2 from "../components/macro-sections/SectionType2.vue"
import SectionSlider from "../components/macro-sections/SectionSlider.vue"
import Footer from "../components/macro-sections/Footer.vue"
import Aside from "../components/macro-sections/Aside.vue"
import { store } from "../data/store";
import axios from "axios";
import { store } from "../data/store";

const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "HomePage",
  components: { DoctorsList, DoctorDetailPage, Jumbotron, SectionType1, SectionType2, SectionSlider, Aside, Footer },
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
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.fetchDoctors();
  },
};
</script>

<template>
  <Jumbotron />
  <DoctorsList :doctors="doctors" />
  <SectionType1 />
  <SectionType2 />
  <SectionSlider />
  <Aside />
  <Footer />
  <!-- <Form /> -->
</template>

<style scoped lang="scss"></style>
