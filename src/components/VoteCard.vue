<script>
export default {
  name: "Vote",
  props: {
    vote: Array,
  },
  methods: {
    getStar() {
      let voto = this.vote.value;
      let message = "";
      for (let i = 0; i < 5; i++)
        if (voto && i < voto) {
          message += " <i class='fa-solid fa-star'></i> ";
        } else message += " <i class='fa-regular fa-star'></i> ";
      return message;
    },
    try() {
      console.log(this.vote.created_at);
    },
  },
  computed: {
    voteDateCreated() {
      const date = new Date(this.vote.created_at);
      let day = date.getDate();
      let month = date.getMonth();
      const year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      // Fix zero bug
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
    },
  },
  created() {
    this.try();
  },
};
</script>

<template>
  <div class="my-bgc mb-2 p-3 mx-2 rounded my-border ">
    <div class="vote">
      <p class="stars d-flex" v-html="getStar()"></p>
    </div>
    <div class="created ms-4">
      {{ voteDateCreated }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.stars {
  font-size: 22px;
  text-shadow: 1px 2px black;
  color: rgb(79, 185, 255) !important;
}

.my-bgc {
  background-color: rgb(241, 241, 241);
}

.my-border {
  border: 1px solid rgb(132, 206, 255);
}

.created {
  font-size: 14px;
}
</style>
