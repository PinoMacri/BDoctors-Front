<script>
export default {
  name: "Pills",
};
</script>

<template>
  <div class="pills">
    <div class="pill-start" style="background-color: blue"></div>
    <div class="pill-center"></div>
    <div class="pill-end"></div>
  </div>
</template>

<style scoped lang="scss">
.pills {
  display: flex;
  border-radius: 50px;
  border: 1px solid black;
  height: 15px;
  width: 40px;
  overflow: hidden;
  .pill-start {
    height: 15px;
    width: 30px;
  }
  .pill-center {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 22px 10px 0 0;
    border-color: blue transparent transparent transparent;
  }
  .pill-end {
    height: 15px;
    width: 30px;
  }
}
</style>
