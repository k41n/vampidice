<template>
  <div class="difficulty">
    <h2>Сложность</h2>
    <div class="level-list">
      <DifficultyLevel
        v-for="number in numbers"
        v-bind:number="number"
        v-on:difficulty-selected="handleDifficultySelected"
        v-bind:selected="selectedLevel === number"
        v-bind:key="number"
      />
    </div>
  </div>
</template>

<script>
import DifficultyLevel from "./DifficultyLevel.vue";

export default {
  name: "Difficulty",
  components: {
    DifficultyLevel
  },
  props: ["selectedLevel"],
  data: () => ({
    numbers: [2,3,4,5,6,7,8,9,10]
  }),
  methods: {
    handleDifficultySelected: function(event) {
      this.$emit('difficulty-selected', event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .level-list{
    display: flex;
    flex-wrap: wrap;
  }
</style>

