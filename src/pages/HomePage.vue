<script>
import Form from "../components/Form.vue";
import DoctorsList from "../components/doctors/DoctorsList.vue";
import DoctorDetailPage from "./doctors/DoctorDetailPage.vue";
import Jumbotron from "../components/macro-sections/Jumbotron.vue"
import Navbar from "../components/macro-sections/Navbar.vue"
import { store } from "../data/store";
import axios from "axios";

const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "HomePage",
  components: { DoctorsList, DoctorDetailPage, Form, Jumbotron },
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
  <Navbar />

  <Jumbotron />
  <div class="container">
    <DoctorsList :doctors="doctors" />
  </div>

  <!-- <Form /> -->
</template>

<style scoped lang="scss">
.pill {
  width: 70px;
  height: 25px;
  display: flex;
}

.left-side {
  height: auto;
  width: 35px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: #ff2d2d;
  left: 0;
  clip-path: polygon(0% 0, 100% 0, 80% 100%, 0 100%);
}

.right-side {
  right: 0;
  height: auto;
  width: 35px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: #0064ff;
  clip-path: polygon(0% 0, 80% 0, 100% 100%, 0 100%);
  transform: scaleX(-1);
}

.title-nav {
  color: #1b1b1b;
  font-weight: bold;
  font-size: 1.25rem;
  margin-left: 0.625rem;
  font-family: Arial, Helvetica, sans-serif;
  background: rgb(0, 100, 255);
  background: linear-gradient(90deg,
      rgba(0, 100, 255, 1) 0%,
      rgba(255, 45, 45, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 1.25rem;
  align-items: center;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.2);
}

.logo-box {
  display: flex;
  align-items: center;
  width: 50%;
}

.login-info {
  display: flex;
  gap: 0.625rem;
  width: 50%;
  justify-content: flex-end;
}

.login-info a {
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  color: #154986;
  transition: all 0.5s ease-out;
}

.login-info a:hover {
  color: #3278cb;
}
</style>
