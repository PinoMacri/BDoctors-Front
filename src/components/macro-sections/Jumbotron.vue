<script>
export default {
    name: "Jumbotron",
    data() {
        return {
            currentIndex: 0,
            images: [
                { url: "../../../public/wallpapertip_medical-wallpaper_897089.jpg", id: 0 },
                { url: "../../../public/wallpapertip_doctor-who-wallpaper_876402.jpg", id: 1 },
                { url: "../../../public/wallpapertip_medical-wallpaper-hd_487773.jpg", id: 2 },
                { url: "../../../public/wallpapertip_medical-wallpaper-hd_487775.jpg", id: 3 },
            ],
        }
    }, methods: {
        sliderPlus() {
            this.currentIndex++
            if (this.currentIndex === this.images.length) {
                this.currentIndex = 0;
            }
        },
        sliderLess() {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.images.length - 1;
            }
        },
        sliderAutomatico() {
            setInterval(() => {
                this.currentIndex++
                if (this.currentIndex === this.images.length) {
                    this.currentIndex = 0;
                }
            }, 3000);
        }
    },
    created() {
        this.sliderAutomatico();
    }
}
    ;
</script>

<template>
    <div class="container-fluid p-0">
        <div class="jumbotron">
            <div class="h-100">
                <i class="fa-solid fa-chevron-left" @click="sliderLess()"></i>
                <img v-for="image in images" :class="currentIndex === image.id ? 'actives' : 'carosello'" :src="image.url"
                    alt="">
                <i class="fa-solid fa-chevron-right" @click="sliderPlus()"></i>
            </div>


            <form class="d-flex filtri" action="">
                <div>
                    <input class="nome-dottore" placeholder="Nome Dottore" type="text">
                </div>
                <div class="citta-dottore">
                    <input placeholder="Città" type="text">
                </div>
                <div class="specializzazione-dottore">
                    <input placeholder="Specializzazione" type="text">
                </div>
                <button>Cerca</button>
            </form>


            <div class="d-flex circle">
                <i v-for="image in images" class="p-2"
                    :class="currentIndex === image.id ? 'fa-solid fa-circle' : 'fa-regular fa-circle'"
                    @click="currentIndex = image.id"></i>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    box-shadow: 1px 1px 2px rgb(190, 185, 185), 0 0 1em blue, 0 0 0.2em red;
    height: 400px;
    position: relative;

    .filtri {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%);

        input {
            padding: 10px;
            width: 250px;
            box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
        }

        .nome-dottore {
            border-radius: 30px 0px 0px 30px;
        }

        button {
            width: 200px;
            box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
            border-radius: 0px 30px 30px 0px;
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

    .actives {
        box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red;
        opacity: 1;
        backface-visibility: hidden;
        transition-property: opacity, box-shadow;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        transition-duration: 1.0s;
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
        transition-duration: 1.0s;
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

    div>img {
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