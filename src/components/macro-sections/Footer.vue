<script>
export default {
    name: "Footer",
    data() {
        return {
            currentIndex: "Home",
            menu: false,
            links: [
                {
                    text: "Home",
                    url: '/',
                    current: false,
                },
                {
                    text: "Ricerca",
                    url: '/ricerca',
                    current: false,
                },
                {
                    text: "Contatti",
                    url: '/contatti',
                    current: false,
                },
                {
                    text: "Chi Siamo",
                    url: '/chi-siamo',
                    current: false,
                },
            ]
        }
    }
};
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-4 col-lg-6 d-flex align-items-center">
                    <img class="img-fluid" src="../../../public/pngwing.com (28).png" alt="">
                    <h2 class="ms-3">BDoctors</h2>
                </div>
                <div class="col-12 col-lg-3">
                    <h2>Pagine</h2>
                    <ul>
                        <li v-for="link in links" :key="link.text">
                            <router-link class="my-router" :to="link.url">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-3">
                    <h2>
                        Contatti
                    </h2>
                    <ul>
                        <li>
                            Via Dolomiti, 11, Milano
                        </li>
                        <li>
                            info@bdoctors.it
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    padding: 50px;
    background-color: rgb(0, 0, 0);

    .col-12 {
        margin-top: 30px;
    }

    ul {
        list-style-type: none;
        padding: 0px;

        li {
            padding: 10px 0px;
            margin-top: 10px;
        }
    }

    .my-router {
        color: white;
        text-decoration: none;
        font-weight: bold;


        &:hover {
            text-shadow: 1px 1px 50px rgb(192, 17, 17),
                0 0 1em blue,
                0 0 0.2em red;
        }
    }

    div {
        color: white;
    }

    img {
        width: 200px;
    }

    h2 {

        text-shadow: 1px 1px 50px rgb(192, 17, 17),
            0 0 1em blue,
            0 0 0.2em red;
    }
}
</style>
