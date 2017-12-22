// Home.vue
<template>
  <div>
    <p>Home page</p>
    <p>Random number from flas: {{ randomNumber }}</p>
  </div>
</template>

<style lang="styl" scoped>
  @import "~styles/home-test"
</style>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        randomNumber: 0,
      };
    },
    methods: {
      getRandom() {
        this.randomNumber = this.getRandomFromBackend();
      },
      getRandomFromBackend() {
        const path = 'http://localhost:5000/api/random';
        axios.get(path)
          .then((response) => {
            this.randomNumber = response.data.randomNumber;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    created() {
      this.getRandom();
    },
  };
</script>
