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
      console.log(this.vote);
    },
  },
  created() {
    this.try();
  },
};
</script>

<template>
  <div class="vote ms-4">
    <p class="stars" v-html="getStar()"></p>
  </div>
  <hr />
</template>

<style scoped lang="scss">
.stars {
  font-size: 22px;
  text-shadow: 1px 2px black;
  color: yellow !important;
}
</style>
