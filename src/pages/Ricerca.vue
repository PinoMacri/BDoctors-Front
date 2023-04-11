<script>
import { store } from "../data/store";
import DoctorsCard from "../components/doctors/DoctorsCard.vue";
import axios from "axios";
const apiBaseUrl = "http://127.0.0.1:8000/api";
const apiBaseUrlSpec = "http://localhost:8000/api/specializations";
const apiBaseUrlVote = "http://localhost:8000/api/votes";
export default {
    name: "Ricerca",
    components: { DoctorsCard },
    data() {
        return {
            store,
            doctors: [],
            specializations: [],
            name: "",
            address: "",
            specialization: "",
            voto: "",
            votes: [],
            media: {},
            city: "",
        }
    },
    methods: {
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
        updateName() {
            this.store.name = this.name;
        },
        updateAddress() {
            this.store.address = this.address;
        },
        updateSpecialization() {
            this.store.specialization = this.specialization;
        },
        updateCity() {
            this.store.city = this.city;
        },
        updateVote() {
            this.store.vote = this.voto;
        },
        onButtonClicked() {
            this.updateName();
            this.updateAddress();
            this.updateSpecialization();
            this.updateCity();
            this.updateVote();
        },
        fetchSpecializations() {
            // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
            axios
                .get(apiBaseUrlSpec)
                .then((res) => {
                    // In res.data arrivano i dati della chiamata da axios
                    this.specializations = res.data;
                })
                // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
                .catch((err) => {
                    console.error(err);
                });
        },
        fetchVotes() {
            // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
            axios
                .get(apiBaseUrlVote)
                .then((res) => {
                    // In res.data arrivano i dati della chiamata da axios
                    this.votes = res.data;
                })
                // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
                .catch((err) => {
                    console.error(err);
                });
        },
    }, computed:
    {
        filter() {
            if (this.store.name && this.store.city && this.store.specialization && this.store.vote) {
                return this.doctors.filter((doctor) => {
                    return doctor.user.name
                        .toLowerCase()
                        .includes(this.store.name.toLowerCase()) &&
                        doctor.city
                            .toLowerCase()
                            .includes(this.store.city.toLowerCase()) &&
                        doctor.specializations.map((specialization) => {
                            return specialization.name.toLowerCase();
                        }).includes(this.store.specialization.toLowerCase()) &&
                        doctor.votes.map((vote) => {
                            return vote.label.toLowerCase();
                        }).includes(this.store.vote.toLowerCase())
                });
            } else if (this.store.name) {
                return this.doctors.filter((doctor) => {
                    return doctor.user.name
                        .toLowerCase()
                        .includes(this.store.name.toLowerCase())
                });
            } else if (this.store.city) {
                return this.doctors.filter((doctor) => {
                    return doctor.city
                        .toLowerCase()
                        .includes(this.store.city.toLowerCase())
                });
            } else if (this.store.specialization) {
                return this.doctors.filter((doctor) => {
                    return doctor.specializations.map((specialization) => {
                        return specialization.name.toLowerCase();
                    }).includes(this.store.specialization.toLowerCase());
                })
            } else if (this.store.vote) {
                return this.doctors.filter((doctor) => {
                    return doctor.votes.map((vote) => {
                        return vote.label.toLowerCase();
                    }).includes(this.store.vote.toLowerCase());
                });
            } else return this.doctors
        }
    },
    created() {
        this.fetchDoctors();
        this.fetchSpecializations();
        this.fetchVotes();

    },
};
</script>

<template>
    <div class="container">
        <h3 class="text-danger mt-4 mb-5 text-center">Tutti i nostri Specialisti</h3>
        <form @submit.prevent class="d-flex filtri" action="">
            <div>
                <input class="nome-dottore" v-model.trim="name" placeholder="Nome Dottore" type="text" />
            </div>
            <div class="citta-dottore">
                <input v-model.trim="city" placeholder="Città" type="text" />
            </div>
            <div class="specializzazione-dottore">
                <select v-model="specialization" class="specializzazione" aria-label="Default select example">
                    <option value="" selected>Specializzazione</option>
                    <option v-for="specialization in specializations">
                        {{ specialization.name }}
                    </option>
                </select>
            </div>
            <div class="">
                <select v-model="voto" class="specializzazione" aria-label="Default select example">
                    <option value="" selected>Voto</option>
                    <option :value="vote.value" v-for="vote in votes">
                        {{ vote.label }}
                    </option>
                </select>
            </div>
            <button @click="onButtonClicked">Cerca</button>
        </form>

        <div class="doctors-list d-flex justify-content-start flex-wrap mb-5">
            <DoctorsCard v-for="(doctor, i) in filter" :key="doctor.id" :doctor="doctor" />
        </div>
    </div>
</template>

<style></style>
