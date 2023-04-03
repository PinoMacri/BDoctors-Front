<script>
import axios from "axios";
const apiBaseUrl = "http://localhost:8000/api/";
import { store } from "../data/store";

const emptyForm = { name: "", email: "", password: "", confirm_password: "" };
const endpoint = "http://127.0.0.1:8000/api/store";
export default {
  name: "ProfileRegistration",
  data() {
    return {
      form: emptyForm,
      store,
    };
  },

  methods: {
    sendRegistationProfile() {
      if (this.form.password === this.form.confirm_password) {
        axios
          .post(endpoint, this.form)
          .then(() => {
            this.form = { name: "", email: "", password: "" };
          })
          .catch((err) => {
            console.error(err);
            this.error = err;
          });
        if (!this.error) {
          this.$router.push({
            name: "home-page",
            query: { redirect: "/" },
          });
          this.store.isRegistered = true;
        }
      } else {
        console.log("no");
      }
    },
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
    created() {
      this.fetchDoctors();
    },
  },
};
</script>

<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Setup Your Profile
                  </p>

                  <form
                    @submit.prevent="sendRegistationProfile"
                    class="mx-1 mx-md-4"
                  >
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-earth fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          class="form-control"
                          v-model.trim="form.address"
                        />
                        <label class="form-label" for="address"
                          >Your Address</label
                        >
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="submit" class="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-end align-items-center order-1 order-lg-2"
                >
                  <div class="join-us text-center">
                    <h1 class="mb-4">Join Us</h1>
                    <img
                      src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg?itok=Z9g0DOPe"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
