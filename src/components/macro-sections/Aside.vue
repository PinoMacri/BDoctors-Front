<script>
export default {
    name: "Aside"
};
</script>

<template>
    <aside class="aside-smart">
        <div class="container ">
            <div class="row align-items-center">
                <div class="col-6 d-flex align-items-center">
                    <h4> Aumenta la tua visibilità.</h4>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                    <div class=" profile-xs ">
                        <a class="btn profile" href="">Registrati<i class="ms-1 fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <aside class="aside-desktop">
        <div class="container ">
            <div class="row align-items-center">
                <div class="col-6 d-flex align-items-center">
                    <h2>Sei uno Specialista? <br> Aumenta la tua visibilità.</h2>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end">
                    <div class=" profile-xs ">
                        <a class="btn profile" href="">Inserisci il tuo Profilo<i
                                class="ms-1 fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped lang="scss">
aside {
    padding: 30px;
    margin-top: 30px;
    background-image: url("../../../public/Background\ 3.jpg");
    background-size: cover;
    margin-bottom: 20px;
    box-shadow: 1px 1px 50px rgb(192, 17, 17),
        0 0 1em blue,
        0 0 0.2em red;
}

h2 {
    font-weight: bold;
}

.profile {
    padding: 10px 30px;

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

@media screen and (min-width: 0px) {
    .aside-desktop {
        display: none;
    }

    .profile {
        width: auto;
        padding: 10px 10px;
    }
}

@media screen and (min-width: 768px) {
    .aside-smart {
        display: none;
    }

    .aside-desktop {
        display: block;
    }

    .profile {
        width: auto;
        padding: 10px 30px;

    }
}
</style>