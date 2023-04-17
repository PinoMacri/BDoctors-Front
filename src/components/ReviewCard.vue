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
};
</script>

<template>
  <div class=" bg-light rounded p-3 my-3">
    <div class="details d-flex align-items-center">
      <h4 class="me-3 text-primary">{{ review.name }}</h4>
      <p class="mt-3">{{ review.created_at }}</p>
    </div>
    <div class="message">
      {{ review.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 13px;
}
</style>
