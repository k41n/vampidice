<template>
  <a class="roll" v-on:click="handleRoll">Бросить</a>
</template>

<script>
import roll from "@/services/roll";

export default {
  name: "Roll",
  props: ["difficulty", "rolls"],
  methods: {
    handleRoll: function() {
      this.$emit("roll-results", roll(this.difficulty, this.rolls));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roll {
  border: solid 1px black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 30px;
  margin-top: 50px;
  padding: 60px;
}
</style>
