<script>
export default {
  name: "Review",
  props: {
    review: Array,
  },
};
</script>

<template>
  <div class="ms-4">
    <div class="details d-flex align-items-center">
      <h4 class="me-3">{{ review.name }}</h4>
      <p class="mt-3">{{ review.created_at }}</p>
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
