<script>
export default {
  name: "SectionType1",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <div>
      <img class="wave" src="../../../public/wave.png" alt="" />
    </div>
    <div class="cuore-sezione">
      <div class="container">
        <div class="row justify-content-center flex-xs-column flex-lg-row">
          <div class="col-xs-12 col-lg-6 text-center">
            <div>
              <img
                class="img-sezione-dottore mb-5"
                src="../../../public/6-1.png"
                alt=""
              />
              <div class="profile-xs mb-3">
                <a class="btn" href=""
                  >Inserisci il tuo Profilo
                  <i class="ms-1 fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-lg-6 ps-5">
            <h2 class="text-danger mb-5">Vantaggi del Dottore</h2>
            <h3>Diventa il Dottore più visitato del Web</h3>
            <p class="mb-3">
              Il progetto di BDoctors nasce con l'intento di diventare la
              Web-App per Dottori più efficiente e tecnologica in circolazione,
              in modo da darti la visibilità che meriti!
            </p>
            <div>
              <div class="d-flex pt-3">
                <div>
                  <img
                    class="conoscere"
                    src="../../../public/pngwing.com (34).png"
                    alt=""
                  />
                </div>
                <div class="ms-3">
                  <h5>Fatti conoscere</h5>
                  <p>
                    Questo progetto può rendere possibile il tuo inserimento in
                    un network capace di espandere la tua presenza
                    professionale. Sarai seguito da un team di professionisti
                    che ti forniranno assistenza 7 giorni su 7 H24, in modo da
                    fugare qualsiasi tuo dubbio!
                  </p>
                </div>
              </div>
              <div class="d-flex pt-3">
                <div>
                  <img
                    class="conoscere"
                    src="../../../public/pngwing.com (38).png"
                    alt=""
                  />
                </div>
                <div class="ms-3">
                  <h5>Fatti trovare</h5>
                  <p>
                    Immagina un luogo virtuale in cui confluiscono tutti i
                    pazienti D'Italia per cercare medici e dottori, in modo che
                    possano quindi trovare facilmente il tuo nome, con BDoctors
                    è possibile!
                  </p>
                </div>
              </div>
              <div class="d-flex pt-3">
                <div>
                  <img
                    class="conoscere"
                    src="../../../public/pngwing.com (36).png"
                    alt=""
                  />
                </div>
                <div class="ms-3">
                  <h5>Fatti recensire</h5>
                  <p>
                    Noi ti diamo gli strumenti e tutto il necessario per
                    spiccare, ma poi sta a te saperli sfruttare! Più sarai
                    professionale e lascerai soddisfatti i clienti più le tue
                    recensioni saranno positive, il destino è nelle tue mani!
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-5 mb-0">
                <a class="btn profile" href=""
                  >Inserisci il tuo Profilo
                  <i class="ms-1 fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img class="wave wave-reverse" src="../../../public/wave.png" alt="" />
  </section>
</template>

<style lang="scss" scoped>
.profile-xs {
  width: 250px;
  box-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
  background: linear-gradient(to right, #00ccff, #094088, #0e80dd);
  background-size: 600% 100%;
  animation: gradient 10s ease infinite;

  i {
    display: none;
  }

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

  a {
    color: white !important;
  }

  &:hover {
    text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;

    i {
      display: inline;
    }
  }
}

.img-sezione-dottore {
  width: 350px;
}

@media screen and (min-width: 0px) {
  .profile-xs {
    display: none;
    margin-left: 150px;
    margin-top: 100px;
    padding: 10px 5px;
  }
}

@media screen and (min-width: 992px) {
  .img-sezione-dottore {
    width: 450px;
  }

  .profile {
    display: none;
  }

  .profile-xs {
    display: block;
  }
}

.profile {
  i {
    display: none;
  }

  color: white !important;
  box-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
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

  &:hover {
    text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;

    i {
      display: inline;
    }
  }
}

@media screen and (min-width: 1200px) {
  .img-sezione-dottore {
    width: 550px;
  }

  .profile-xs {
    display: none;
  }

  .profile {
    display: block;
    width: 200px;
    margin: 0px;
  }
}

.conoscere {
  width: 80px;
}

h2,
h3,
h5 {
  font-weight: bold;
  text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em rgb(255, 255, 255),
    0 0 0.2em rgb(255, 255, 255);
}

h3,
h5 {
  text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
  color: white;
}

p {
  font-weight: 500;
}

.cuore-sezione {
  background-color: #f2f2f2;
}

.wave {
  width: 100%;
  opacity: 0.05;
}

.wave-reverse {
  transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  -moz-transform: scaleY(-1);
  -ms-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  filter: flipv;
  opacity: 0.05;
}
</style>
