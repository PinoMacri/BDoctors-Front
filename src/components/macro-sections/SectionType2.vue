<script>
export default {
    name: "SectionType2",
    data() {
        return {

        }
    }

};
</script>

<template>
    <section>

        <div class="cuore-sezione mt-5">

            <div class="container">
                <div class="row flex-column-reverse flex-lg-row justify-content-center ">
                    <div class="col-xs-12 col-lg-6 ps-5">
                        <h2 class="text-danger mb-5 mt-4">Vantaggi del Paziente</h2>

                        <h3>Contatta il tuo medico con un click</h3>
                        <p class="mb-3">BDoctors ti permette di contattare immediatamente il medico giusto per le tue
                            esigenze. Con semplicità il sito ti permetterà di scoprire quali sono le specializzazioni utili
                            a te ad individuare i dottori in quel campo.
                        </p>
                        <div>

                            <div class="d-flex pt-3">
                                <div>
                                    <img class="conoscere" src="../../../public/pngwing.com (40).png" alt="">
                                </div>
                                <div class="ms-3">
                                    <h5>Contatto veloce e senza intermediazione</h5>
                                    <p>BDoctors è una Web-App che ti aiuta nella ricerca di medici specialisti. Potrai
                                        contattare direttamente il professionista senza intermediazioni e ricevere il prima
                                        possibile attenzione per qualsiasi esigenza o necessità tu abbia.
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex pt-3">
                                <div>
                                    <img class="conoscere" src="../../../public/pngwing.com (41).png" alt="">
                                </div>
                                <div class="ms-3">
                                    <h5>Navigazione intuitiva</h5>
                                    <p>BDoctors è una Web-App user friendly dove potrai facilmente trovare i medici di cui
                                        hai bisogno. Ti basterà scrivere nella barra di ricerca il nome del medico che stai
                                        cercando o la specializzazione che ti serve e in un click troverai l'intera lista
                                        degli esperti del settore a tua disposizione.
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex pt-3">
                                <div>
                                    <img class="conoscere" src="../../../public/pngwing.com (39).png" alt="">
                                </div>
                                <div class="ms-3">
                                    <h5>Fai conoscere la tua esperienza</h5>
                                    <p>BDoctors è una Web-App che ha l'intento di creare una community forte, solida, coesa
                                        e collegata, descrivi la tua esperienza con il professionista in modo da condividere
                                        pareri e opinioni con gli altri utenti!
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end justify-content-lg-start mt-5 mb-0">
                                <router-link to="/ricerca" class="btn profile">Scopri di più <i
                                        class="ms-1 fa-solid fa-arrow-right"></i></router-link>
                            </div>


                        </div>

                    </div>
                    <div class="col-xs-12 col-lg-6 text-center">
                        <div>
                            <img class="img-sezione-dottore" src="../../../public/dottoriroma-vantaggi-utenti-img.png"
                                alt="">
                            <div class=" profile-xs mb-3">
                                <a class="btn " href="">Scopri di più<i class="ms-1 fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.profile-xs {
    padding: 10px 5px;
    margin-top: 200px;
    margin-left: 150px;
    width: 250px;
    box-shadow: 1px 1px 2px rgb(190, 185, 185),
        0 0 1em blue,
        0 0 0.2em red;
    background: linear-gradient(to right, #00ccff, #094088, #0e80dd);
    background-size: 600% 100%;
    animation: gradient 10s ease infinite;
    display: none;

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

.profile {
    i {
        display: none;
    }

    color: white !important;
    box-shadow: 1px 1px 2px rgb(190, 185, 185),
    0 0 1em blue,
    0 0 0.2em red;
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

.conoscere {
    width: 100px;
}

h2,
h3,
h5 {
    font-weight: bold;
    text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em rgb(255, 255, 255), 0 0 0.2em rgb(255, 255, 255);
}

h3,
h5 {
    text-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
    color: white;
}

p {
    font-weight: 500;
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
</style>