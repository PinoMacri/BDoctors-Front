<script>
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api/messageMail";
const emptyForm = {
  doctor_id: "",
  sender: "",
  subject: "",
  message: "",
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
            sender: "",
            subject: "",
            message: "",
          };
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          location.href = `http://localhost:5174/doctors/${this.doctor}`;
        });
    },
    getId() {
      this.doctor = window.location.pathname;
      let id = this.doctor.split("/");
      this.form.doctor_id = id[2];
      this.doctor = id[2];
      console.log(this.form.doctor_id);
    },
  },
};
</script>

<template>
  <div class="container p-2">
    <h1>Contact us!</h1>
    <!-- Prevent e intercetta il method sendform -->
    <form @submit.prevent="sendForm" class="py-5" novalidate>
      <!-- EMAIL -->
      <div class="mb-3">
        <label for="sender" class="form-label"
          >Email address<sup class="text-danger">*</sup></label
        >
        <input
          @keyup="this.getId()"
          type="email"
          class="form-control"
          id="sender"
          name="sender"
          aria-describedby="name@example.com"
          v-model.trim="form.sender"
          required
        />
        <small class="text-muted form-text">Your email</small>
      </div>

      <!-- OGGETTO -->
      <div class="mb-3">
        <label for="subject" class="form-label"
          >Email Subject<sup class="text-danger">*</sup></label
        >
        <input
          type="text"
          class="form-control"
          id="subject"
          name="subject"
          v-model.trim="form.subject"
          required
        />
      </div>

      <!-- CONTENUTO DEL MESSAGGIO -->
      <div class="mb-3">
        <label for="message" class="form-label"
          >Message<sup class="text-danger">*</sup></label
        >
        <textarea
          class="form-control"
          rows="3"
          name="message"
          id="message"
          v-model.trim="form.message"
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
