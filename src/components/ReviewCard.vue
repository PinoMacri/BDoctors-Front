<script>
export default {
  name: "Review",
  data: () => {
    return {
      media: 0,
    };
  },
  props: {
    review: Array,
    doctor: Array,
  }, methods: {

    getStar() {
      let roundedMedia = Math.floor(this.media);
      let message = "";
      for (let i = 0; i < 5; i++)
        if (roundedMedia && i < roundedMedia) {
          message += " &#9733 ";
        } else message += " &#9734 ";
      return message;
    }
  }, computed: {
    getMedia() {
      let sum = 0;
      this.doctor.votes.forEach((vote) => {
        sum = sum + vote.value;
      });
      this.media = sum / this.doctor.votes.length;
      return this.media;
    }
  },
  mounted() {
    this.getMedia;

  }
};
</script>

<template>
  <div class="review ms-4">
    <div class="details d-flex align-items-center">
      <h4 class="me-3">{{ review.name }}</h4>
      <p class="mt-3">{{ review.created_at }}</p>
    </div>
    <div class="vote mb-3">
      <p class="stars" v-html="getStar()"></p>

    </div>
    <div class="message">
      {{ review.text }}
    </div>
  </div>
  <hr />
</template>

<style scoped lang="scss">
p {
  font-size: 13px;
}
</style>
