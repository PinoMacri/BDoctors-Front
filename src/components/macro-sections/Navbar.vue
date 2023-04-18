<script>
export default {
  name: "Navbar",
  data() {
    return {
      currentIndex: "Home",
      menu: false,
      links: [
        {
          text: "Home",
          url: "/",
          current: false,
        },
        {
          text: "Ricerca",
          url: "/ricerca",
          current: false,
        },
      ],
    };
  },
};
</script>

<template>
  <!--** NAV -->
  <div class="nav-bar p-2">
    <nav class="container">
      <!--** NAV Smartphone & Tablet -->
      <div class="row row-smartphone-tablet m-0 p-0 align-items-center justify-content-between">
        <div class="col-6 col-lg-3 d-flex align-items-center p-0">
          <a href="#"><img class="logo" src="../../../public/pngwing.com (28).png" alt="" /></a>
          <h4 class="scritta-logo d-none mb-0 d-lg-block">BDoctors</h4>
        </div>
        <div class="col-6 text-end">
          <i @click="menu = !menu" :class="menu === false ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'"
            style="color: black"></i>
        </div>
      </div>
      <div v-if="menu === true" class="d-flex flex-column align-items-end d-lg-none">
        <div class="singolo-link h-100 position-relative d-flex flex-column align-items-center justify-content-center"
          v-for="link in links" v-bind:key="link.text">
          <router-link :to="link.url" :class="currentIndex === link.text ? 'link-click' : ''" class="tendina"
            @click="currentIndex = link.text">{{ link.text }}</router-link>
          <div v-if="currentIndex === link.text" class="selezione-hover-logo"></div>
        </div>
      </div>

      <!--** NAV Smartphone Desktop -->
      <div class="row row-desktop m-0 p-0 align-items-center me-5 justify-content-between">
        <div class="col-3 d-flex align-items-center">
          <a href="#"><img class="logo" src="../../../public/pngwing.com (28).png" alt="" /></a>
          <h4 class="scritta-logo mb-0">BDoctors</h4>
        </div>
        <div class="col-6 h-100 d-flex justify-content-start align-items-center">
          <div
            class="singolo-link h-100 position-relative d-flex flex-column align-items-center me-5 justify-content-center"
            v-for="link in links" v-bind:key="link.text">
            <router-link :to="link.url" :class="currentIndex === link.text ? 'link-click' : ''">{{ link.text }}
              <div class="selezione-hover-logo" :class="currentIndex === link.text ? 'link-click' : ''"></div>
            </router-link>
          </div>
        </div>
        <div class="col-3 text-end">
          <a class="px-4" href="http://127.0.0.1:8000/login">Login</a>
          <a class="px-4" href="http://127.0.0.1:8000/register">Register</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// NAV
.nav-bar {
  position: sticky;
  z-index: 3;
  top: 0;
  box-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;

  background: linear-gradient(to right, #082f9c, #3da3cc);
}

nav {
  font-family: "Quicksand", sans-serif;

  .row {
    list-style-type: none;
    height: 70px;

    div.col-3,
    div.col-6 {
      a {
        text-decoration: none;
        color: black;
        font-weight: bold;

        &:hover {
          text-shadow: 1px 1px 2px rgb(0, 217, 255), 0 0 1em rgb(0, 174, 255),
            0 0 0.2em rgb(0, 217, 255);
          color: white;
        }
      }

      a.active .selezione-hover-logo {
        height: 4px;
        width: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 2px rgb(0, 217, 255), 0 0 1em rgb(0, 174, 255),
          0 0 0.2em rgb(0, 217, 255);
        position: absolute;
        bottom: 0;
        margin-bottom: 5px;
      }

      a.active {
        text-shadow: 1px 1px 2px rgb(0, 217, 255), 0 0 1em rgb(0, 174, 255),
          0 0 0.2em rgb(0, 217, 255);
        color: white !important;
      }

      h4 {
        font-weight: bold;
        margin-left: 8px;
        font-size: 21px;
        text-shadow: 1px 1px 2px rgb(0, 217, 255), 0 0 1em rgb(0, 174, 255),
          0 0 0.2em rgb(0, 217, 255);
        color: white;
      }
    }
  }

  .logo {
    width: 75px;
  }
}

.fa-solid.fa-bars,
.fa-solid.fa-xmark {
  font-size: 30px;
}

.tendina {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

// RESPONSIVE
@media screen and (min-width: 0px) {
  .row-desktop {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .row-desktop {
    display: flex;
  }

  .row-smartphone-tablet {
    display: none;
  }
}
</style>
