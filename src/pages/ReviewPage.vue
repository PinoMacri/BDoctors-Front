<script>
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api/review";
const emptyForm = {
  doctor_id: "",
  name: "",
  text: "",
};
export default {
  name: "ContactPage",
  data: () => ({
    form: emptyForm,
    doctor: "",
    doctor_id: "",
  }),
  methods: {
    sendForm() {
      axios
        .post(endpoint, this.form)
        .then(() => {
          this.form = {
            doctor_id: "",
            name: "",
            text: "",
          };
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          window.history.back();
        });
    },
    getId() {
      this.doctor = window.location.pathname;
      let id = this.doctor.split("/");
      this.form.doctor_id = id[2];
      this.doctor = id[2];
      console.log(this.doctor);
    },
  },
};
</script>

<template>
  <div class="container p-2">
    <h1>Leave us a review</h1>
    <!-- Prevent e intercetta il method sendform -->
    <form @submit.prevent="sendForm" class="py-5">
      <!-- EMAIL -->
      <div class="mb-3">
        <label for="name" class="form-label">Full name<sup class="text-danger">*</sup></label>
        <input @keyup="this.getId()" type="text" class="form-control" id="name" name="name"
          aria-describedby="name@example.com" v-model.trim="form.name" required />
        <small class="text-muted form-text">Your full name</small>
      </div>

      <!-- CONTENUTO DEL MESSAGGIO -->
      <div class="mb-3">
        <label for="text" class="form-label">Review<sup class="text-danger">*</sup></label>
        <textarea class="form-control" rows="3" name="text" id="text" v-model.trim="form.text" required></textarea>
      </div>

      <div>
        <button @click="redirect" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
