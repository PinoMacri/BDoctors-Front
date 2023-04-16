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
  },
  computed: {
    reviewDateCreated() {
      const date = new Date(this.review.created_at);
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
};
</script>

<template>
  <div class="ms-4">
    <div class="details d-flex align-items-center">
      <h4 class="me-3">{{ review.name }}</h4>
      <p class="mt-3">{{ reviewDateCreated }}</p>
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
