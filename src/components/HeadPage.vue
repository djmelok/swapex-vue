<template lang="pug">
.head-page
  .head-page__title {{ title }}
  a.head-page__close(href="/")
    i.fas.fa-times
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.head-page {
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  &__title {
    font-weight: 500;
    text-transform: uppercase;
    color: #b8b8b8;
    margin: 0 auto;
  }

  &__close {
    font-size: 24px;
    color: #b8b8b8;
    margin-left: -12px;
  }
}
</style>
