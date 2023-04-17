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
          message += " &#9733 ";
        } else message += " &#9734 ";
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
  <div class="vote ms-4">
    <p class="stars mb-2" v-html="getStar()"></p>
  </div>
  <div class="created ms-4">
    {{ voteDateCreated }}
  </div>
  <hr />
</template>

<style scoped lang="scss">
.stars {
  font-size: 22px;
  text-shadow: 1px 2px black;
  color: yellow !important;
}
.created {
  font-size: 14px;
}
</style>
