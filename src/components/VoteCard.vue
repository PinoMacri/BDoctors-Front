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
      console.log(this.vote);
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
</style>
