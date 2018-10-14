<template>
  <a class="reset" v-on:click="handleClick">Roll again</a>
</template>

<script>
export default {
  name: "Reset",
  methods: {
    handleClick: function() {
      this.$emit('reset');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .reset {
    border: solid 1px black;
    border-radius: 10px;
    cursor: pointer;
    font-size: 30px;
    margin-top: 50px;
    padding: 60px;
  }
</style>


