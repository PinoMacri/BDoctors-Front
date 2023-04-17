<script>
import DoctorsList from "../components/doctors/DoctorsList.vue";
import Jumbotron from "../components/macro-sections/Jumbotron.vue";
import SectionType1 from "../components/macro-sections/SectionType1.vue";
import SectionType2 from "../components/macro-sections/SectionType2.vue";
import SectionSlider from "../components/macro-sections/SectionSlider.vue";
import Footer from "../components/macro-sections/Footer.vue";
import Aside from "../components/macro-sections/Aside.vue";
import { store } from "../data/store";
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";

const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "HomePage",
  components: {
    DoctorsList,
    Jumbotron,
    SectionType1,
    SectionType2,
    SectionSlider,
    Aside,
    Footer,
    AppLoader,
  },
  data() {
    return {
      isLoading: false,
      store,
      doctors: [],
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
  },
  computed: {
    sponsoredDoctor() {
      return this.doctors.filter((doctor) => {
        if (doctor.is_sponsored) {
          return true;
        }
      });
    },
  },
  created() {
    this.fetchDoctors();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <Jumbotron />
    <div class="container">
      <DoctorsList :doctors="sponsoredDoctor" />
    </div>
    <SectionType1 />
    <SectionType2 />
    <SectionSlider />
    <Aside />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
