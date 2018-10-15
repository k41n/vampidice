<template>
  <div class="roll-bank">
    <h2>Количество бросков</h2>
    <div class="dice-list">
      <Dice
        v-for="number in numbers"
        v-bind:number="number"
        v-on:dice-selected="handleDiceSelected"
        v-bind:selected="value === number"
        v-bind:key="number"
      />
    </div>
  </div>
</template>

<script>
import Dice from "./Dice.vue";

export default {
  name: "RollBank",
  components: {
    Dice
  },
  props: ["value"],
  data: () => ({
    numbers: Array.from(Array(12).keys())
  }),
  methods: {
    handleDiceSelected: function(event) {
      this.$emit("input", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dice-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
