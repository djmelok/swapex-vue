<template></template>

<script>

export default {
  name: 'app',
  data: () => ({

  }),
  beforeCreate() {
    this.$http.post('https://swapex.herokuapp.com/api/testuser', { withCredentials: true })
      .then(response => {
        console.log(response)
      })
  },
  beforeDestroy() {

  },
  mounted() {

  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="scss">

}



</style>
