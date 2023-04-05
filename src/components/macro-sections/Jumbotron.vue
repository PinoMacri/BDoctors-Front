<script>
import axios from "axios";
import { store } from "../../data/store";
const apiBaseUrl = "http://localhost:8000/api/specializations";
export default {
  name: "Jumbotron",
  data() {
    return {
      currentIndex: 0,
      images: [
        {
          url: "../../../public/wallpapertip_medical-wallpaper_897089.jpg",
          id: 0,
        },
        {
          url: "../../../public/wallpapertip_doctor-who-wallpaper_876402.jpg",
          id: 1,
        },

        {
          url: "../../../public/wallpapertip_medical-wallpaper-hd_487773.jpg",
          id: 2,
        },
        {
          url: "../../../public/wallpapertip_medical-wallpaper-hd_487775.jpg",
          id: 3,
        },
      ],
      specializations: [],
      name: "",
      address: "",
      specialization: "",
      store,
    };
  },
  emits: [
    "name-change",
    "address-change",
    "specialization-change",
    "form-submit",
  ],
  methods: {
    sliderPlus() {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        this.currentIndex = 0;
      }
    },
    sliderLess() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    },
    sliderAutomatico() {
      setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex === this.images.length) {
          this.currentIndex = 0;
        }
      }, 5000);
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
    updateName() {
      this.store.name = this.name;
    },
    updateAddress() {
      this.store.address = this.address;
    },
    updateSpecialization() {
      this.store.specialization = this.specialization;
    },
    onButtonClicked() {
      this.updateName();
      this.updateAddress();
      this.updateSpecialization();
      this.$router.push({
        name: "search",
        query: { redirect: "/search" },
      });
    },
  },
  created() {
    this.sliderAutomatico();
    this.fetchSpecializations();
  },
};
</script>

<template>
  <div class="container-fluid p-0">
    <div class="jumbotron">
      <div class="h-100">
        <i class="fa-solid fa-chevron-left" @click="sliderLess()"></i>
        <img
          v-for="image in images"
          :class="currentIndex === image.id ? 'actives' : 'carosello'"
          :src="image.url"
          alt=""
        />
        <i class="fa-solid fa-chevron-right" @click="sliderPlus()"></i>
      </div>

      <form
        @submit.prevent="$emit('form-submit')"
        class="d-flex filtri"
        action=""
      >
        <div>
          <input
            class="nome-dottore"
            v-model.trim="name"
            placeholder="Nome Dottore"
            type="text"
          />
        </div>
        <div class="citta-dottore">
          <input v-model.trim="address" placeholder="Città" type="text" />
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

      <div class="d-flex circle">
        <i
          v-for="image in images"
          class="p-2"
          :class="
            currentIndex === image.id
              ? 'fa-solid fa-circle'
              : 'fa-regular fa-circle'
          "
          @click="currentIndex = image.id"
        ></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filtri {
  flex-direction: column;
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);

  .nome-dottore {
    border-radius: 30px 30px 0px 0px;
  }

  input {
    width: 250px;
    padding: 10px;
    box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
  }

  select {
    appearance: none;
    width: 250px;
    height: 48px;
    padding: 10px;
    box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: pointer;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }

  button {
    border-radius: 0px 0px 30px 30px;
    height: 40px;
    box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
    color: white;
    text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
    background: linear-gradient(to right, #00ccff, #094088, #0e80dd);
    background-size: 600% 100%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .filtri {
    input {
      width: 450px;
    }
  }
}

@media screen and (min-width: 992px) {
  .filtri {
    flex-direction: row;
    bottom: 70%;

    input {
      width: 200px;
    }

    button {
      width: 200px;
      border-radius: 0px 30px 30px 0px;
      height: 47.5px;
    }

    .nome-dottore {
      border-radius: 30px 0px 0px 30px;
    }
  }
}

@media screen and (min-width: 992px) {
  .filtri {
    flex-direction: row;
    bottom: 70%;

    input {
      width: 200px;
    }

    button {
      width: 200px;
      border-radius: 0px 30px 30px 0px;
      height: 47.5px;
    }

    .nome-dottore {
      border-radius: 30px 0px 0px 30px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .filtri {
    bottom: 50%;

    input {
      width: 250px;
    }

    button {
      width: 250px;
    }
  }
}

.jumbotron {
  box-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
  height: 400px;
  position: relative;

  .actives {
    box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
    opacity: 1;
    backface-visibility: hidden;
    transition-property: opacity, box-shadow;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-duration: 1s;
  }

  .carosello {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 100%;

    transition-property: opacity, box-shadow;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-duration: 1s;
    opacity: 0;
    box-shadow: 0;
  }

  .circle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    .fa-solid.fa-circle,
    .fa-regular.fa-circle {
      color: white;
      text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
      cursor: pointer;
    }
  }

  .count {
    position: absolute;
    bottom: 0;
    left: 50%;
  }

  div > img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .fa-solid.fa-chevron-left {
    position: absolute;
    left: 0;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    padding-left: 50px;
    cursor: pointer;
  }

  .fa-solid.fa-chevron-right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 30px;
    padding-right: 50px;
    cursor: pointer;
  }
}
</style>
