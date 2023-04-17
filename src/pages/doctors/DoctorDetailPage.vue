<script>
import ReviewCard from "../../components/ReviewCard.vue";
import VoteCard from "../../components/VoteCard.vue";
import { store } from "../../data/store";
import axios from "axios";
import AppLoader from "../../components/AppLoader.vue";
const apiBaseUrl = "http://localhost:8000/api/";

export default {
  name: "DoctorDetailPage",
  data: () => {
    return {
      form: {
        vote_id: 0,
      },
      store,
      isLoading: false,
      doctor: [],
      voto: 0,
      media: 0,
      alert: false,
    };
  },
  components: { ReviewCard, VoteCard, AppLoader },
  methods: {
    getDoctor() {
      this.isLoading = true;
      const endpoint = apiBaseUrl + "doctors/" + this.$route.params.id;
      axios
        .get(endpoint)
        .then((res) => {
          this.doctor = res.data;
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        })
        .then(() => {
          this.isLoading = false;
          this.getMedia;
        });
    },
    changeVote() {
      this.form.vote_id = this.voto;
    },
    updateAlert() {
      alert("Voto inviato con successo!");
    },
    sendForm() {
      axios
        .post(`http://127.0.0.1:8000/api/doctors/${this.doctor.id}`, this.form)
        .then(() => {
          this.form = {
            vote_id: this.voto,
          };
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.updateAlert();
          location.reload();
        });
    },
    getStar() {
      let roundedMedia = Math.floor(this.media);
      let message = "";
      for (let i = 0; i < 5; i++)
        if (roundedMedia && i < roundedMedia) {
          message += "<i class='fa-solid fa-star'></i>";
        } else message += " <i class='fa-regular fa-star'></i> ";
      return message;
    },
  },
  computed: {
    formatAddress() {
      const location = this.doctor.address;
      location.split(" ").join("+").split(",+").join("%");
      const address = `https://www.google.com/maps/search/?api=1&query=${location}`;
      return address;
    },
    getMedia() {
      let sum = 0;
      this.doctor.votes.forEach((vote) => {
        sum = sum + vote.value;
      });
      this.media = sum / this.doctor.votes.length;
      return this.media;
    },
  },
  created() {
    this.getDoctor();
  },
};
</script>

<template>
  <!-- top section -->
  <div class="container">
    <div
      v-if="this.store.alert"
      :is-open="isALertOpen"
      @close="isALertOpen = false"
      class="container"
    >
      <div
        class="alert alert-dismissible fade show my-5"
        :class="this.store.alertType"
        role="alert"
      >
        {{ this.store.alert }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <AppLoader v-if="isLoading === true" />
    <div v-else>
      <div class="d-flex align-items-center mt-3 px-4">
        <div class="user d-flex align-items-center">
          <!-- ! foto dottore -->
          <div class="circle my-border">
            <div class="photo d-flex">
              <img
                v-if="doctor.photo"
                :src="'http://127.0.0.1:8000/storage/' + doctor.photo"
                alt=""
                class="img-fluid"
              />
              <img
                v-else
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
                alt=""
              />
            </div>
            <!-- premium badge -->
            <div v-if="doctor.is_sponsored" class="premium-over">
              <img
                src="../../../public/Sponsored.png"
                alt="logo overlay"
                class="img-fluid"
              />
            </div>
          </div>
          <!-- !generalità -->
          <div class="info me-5 ms-4">
            <h1 class="mt-3">{{ doctor.user.name }}</h1>
            <p class="stars" v-html="getStar()"></p>

            <div
              class="specialization-list d-flex flex-wrap justify-content-start align-items-center mt-4"
            >
              <div
                v-for="specialization in doctor.specializations"
                class="badge me-3 mb-3"
                :style="{ backgroundColor: specialization.color }"
              >
                {{ specialization.name }}
              </div>
            </div>
          </div>
        </div>
        <!-- !telefono e contatti -->
        <div class="contacts mx-5">
          <h4 class="phone mt-3">Phone: +39 {{ doctor.phone }}</h4>
          <h6 class="location me-5">Location: {{ doctor.address }}</h6>
          <a :href="formatAddress" target="_blank" class="location me-5"
            >Scopri dove si trova!</a
          >
          <div class="mt-3">
            <router-link
              :to="{ name: 'contact' }"
              class="btn btn-sm btn-primary me-3 mb-2"
              ><i class="fa-solid fa-paper-plane me-2"></i
              >Messaggio</router-link
            >
          </div>
        </div>
        <!-- ! stripe recensioni -->
        <div class="alt-bg p-3 flex-column rounded stripe-collappse">
          <div class="top">
            <h2 class="text-light pt-3">Conosci {{ doctor.user.name }} ?</h2>
          </div>
          <div class="bottom d-flex align-items-center">
            <!--! recensione -->
            <div class="message-review-vote d-flex flex-column">
              <router-link
                :to="{ name: 'review' }"
                class="btn btn-sm btn-secondary me-3 mb-2"
                >Lacia una Recensione</router-link
              >
            </div>
            <!--! voto -->
            <form @submit.prevent="sendForm" novalidate>
              <div class="d-flex flex-column me-3">
                <label for="vote" class="form-label"
                  >Lascia un voto<sup class="text-danger">*</sup></label
                >
                <select
                  @change="changeVote"
                  v-model="voto"
                  class="mb-2 form-select"
                  aria-label="Default select example"
                >
                  <option :value="0" selected>Voto</option>
                  <option :value="1">Pessimo</option>
                  <option :value="2">Discreto</option>
                  <option :value="3">Buono</option>
                  <option :value="4">Ottimo</option>
                  <option :value="5">Eccellente</option>
                </select>
                <button
                  type="submit"
                  class="btn btn-primary p-1 align-self-center"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- !stripe recensioni small -->
      <div
        class="alt-bg container align-items-center justify-content-between rounded small-stripe my-4"
      >
        <div class="top">
          <h2 class="text-light pt-3">Conosci {{ doctor.user.name }} ?</h2>
        </div>
        <div class="bottom d-flex align-items-center">
          <!--! recensione -->
          <div class="message-review-vote d-flex flex-column">
            <router-link
              :to="{ name: 'review' }"
              class="btn btn-sm btn-secondary me-3 mb-2"
              >Lacia una Recensione</router-link
            >
          </div>
          <!--! voto -->
          <form @submit.prevent="sendForm" novalidate>
            <div class="d-flex flex-column me-3">
              <label for="vote" class="form-label"
                >Lascia un voto<sup class="text-danger">*</sup></label
              >
              <select
                @change="changeVote"
                v-model="voto"
                class="mb-2 form-select"
                aria-label="Default select example"
              >
                <option :value="0" selected>Voto</option>
                <option :value="1">Pessimo</option>
                <option :value="2">Discreto</option>
                <option :value="3">Buono</option>
                <option :value="4">Ottimo</option>
                <option :value="5">Eccellente</option>
              </select>
              <button
                type="submit"
                class="btn btn-primary p-1 align-self-center"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- tabelle principali -->
      <div class="d-flex main-wrapper">
        <div class="review mb-5">
          <div class="bg-primary rounded">
            <h1 class="text-light m-0">Recensioni</h1>
          </div>
          <div class="p-5 my-bgc rounded-bottom">
            <ReviewCard v-for="review in doctor.review" :review="review" />
          </div>
        </div>
        <div class="vote-title">
          <div class="bg-primary mx-2 mb-1 rounded px-2">
            <h1 class="text-light m-0 mb-3 rounded-top">Voti</h1>
          </div>
          <div class="vote-wrapper">
            <div class="vote">
              <VoteCard
                class="mt-2"
                v-for="vote in doctor.votes"
                :vote="vote"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review {
  width: 75%;
}

.vote {
  max-height: 600px;
  padding: 0;
  transform: translate(0px, -8px);
}

.stars {
  font-size: 22px;
  text-shadow: 1px 2px black;
  color: rgb(79, 185, 255) !important;
}

.photo {
  margin: 0 20px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.specialization {
  font-size: 14px;
}

.badge {
  border-radius: 50px;
  padding: 5px 10px;
}

.my-bgc {
  background-color: rgb(241, 241, 241);
}

.alt-bg {
  background-color: #fc3d3d;
  transform: translate(0px, -45px);
  min-height: 215px;

  h2 {
    max-width: 150px;
  }
}

.premium-over {
  width: 125px;
  height: 0;

  img {
    transform: translate(60px, -120px);
  }
}

// media custom per sezione voti
@media (min-width: 1550px) {
  .vote {
    transform: translate(0px, -8px);
    max-height: 800px;
  }
  .vote-wrapper {
    display: flex;
    overflow-x: auto;
    margin-bottom: 15px;
  }
}

@media (max-width: 990px) {
  .stripe-collappse {
    display: none;
  }

  .small-stripe {
    display: flex;
  }

  .alt-bg {
    transform: translate(0px, 0px);
    min-height: fit-content;

    .top {
      min-width: 200px;
    }
  }

  .main-wrapper {
    flex-direction: column;

    .review {
      width: 100%;
    }

    .vote {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .vote-wrapper {
        display: flex;
        margin-bottom: 15px;
      }
    }
  }
}

@media (min-width: 990px) {
  .small-stripe {
    display: none;
  }
}
</style>
