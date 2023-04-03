<script>
import axios from "axios";
import { store } from "../data/store";

const apiBaseUrl = "http://localhost:8000/api/specializations";
const emptyForm = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  address: "",
  phone: "",
  specialization: [],
};
const endpoint = "http://127.0.0.1:8000/api/store";
export default {
  name: "Form",

  data() {
    return {
      form: emptyForm,
      error: "",
      specializations: [],
      specialization: [],
      store,
    };
  },

  methods: {
    sendRegistation() {
      if (this.form.password === this.form.confirm_password) {
        axios
          .post(endpoint, this.form)
          .then(() => {
            this.form = {
              name: "",
              email: "",
              password: "",
              address: "",
              phone: "",
              specialization: [],
            };
          })
          .catch((err) => {
            console.error(err);
            this.error = err;
          })
          .then(() => {
            this.$router.push({
              name: "home",
              query: { redirect: "/" },
            });
          });
      } else {
        console.log("no");
      }
    },
    selectSpecialization(id) {
      if (this.specialization.includes(id)) {
        let index = this.specialization.indexOf(id);
        if (index !== -1) {
          this.specialization.splice(index, 1);
        }
      } else {
        this.specialization.push(id);
      }
    },
    onButtonClicked() {
      this.store.isRegistered = true;
      console.log(this.form);
    },
    fetchSpecializations() {
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      axios
        .get(apiBaseUrl)
        .then((res) => {
          // In res.data arrivano i dati della chiamata da axios
          this.specializations = res.data;
        })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {
    pushToForm() {
      this.form.specialization = this.specialization;
    },
  },
  created() {
    this.fetchSpecializations();
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
                    Sign up
                  </p>

                  <form @submit.prevent="sendRegistation" class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                          v-model.trim="form.name"
                        />
                        <label class="form-label" for="name"
                          >Your Full Name</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="form-control"
                          v-model.trim="form.email"
                        />
                        <label class="form-label" for="email">Your Email</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="form-control"
                          v-model.trim="form.password"
                        />
                        <label class="form-label" for="password"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="confirm_password"
                          name="confirm_password"
                          class="form-control"
                          v-model.trim="form.confirm_password"
                        />
                        <label class="form-label" for="confirm_password"
                          >Repeat your password</label
                        >
                      </div>
                    </div>

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
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-phone fa-lg me-3 fa-fw mb-4"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          class="form-control"
                          v-model.trim="form.phone"
                        />
                        <label class="form-label" for="address"
                          >Your Address</label
                        >
                      </div>
                    </div>

                    <div class="row flex-wrap justify-content-between mb-5">
                      <div
                        v-for="specialization in specializations"
                        :key="specialization.id"
                        class="form-check me-3 col-3"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="specialization.id"
                          :id="specialization.id"
                          name="specialization"
                          @click="selectSpecialization(specialization.id)"
                        />
                        <label
                          class="form-check-label check-text"
                          :for="specialization.id"
                        >
                          {{ specialization.name }}
                        </label>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        @click="onButtonClicked()"
                        type="submit"
                        class="btn btn-primary btn-lg"
                      >
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

<style scoped lang="scss">
img {
  border-radius: 25px;
}
</style>
