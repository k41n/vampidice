<template>
  <div id="app">
    <RollBank v-if="!results" v-on:dice-selected="handleDiceSelected" v-bind:selectedDice="selectedDice" />
    <Difficulty v-if="!results" v-on:difficulty-selected="handleDifficultySelected" v-bind:selectedLevel="selectedLevel" />
    <Results v-if="results" v-bind:results="results" />
    <Reset v-if="results" v-on:reset="handleReset" />
    <Roll v-if="!results" v-bind:difficulty="selectedLevel" v-bind:rolls="selectedDice" v-on:roll-results="handleRollResults" />
  </div>
</template>

<script>
import Roll from "./components/Roll.vue";
import RollBank from "./components/RollBank.vue";
import Difficulty from "./components/Difficulty.vue";
import Results from "./components/Results.vue";
import Reset from "./components/Reset.vue";

export default {
  name: "app",
  data: () => (
    {
      selectedDice: 0,
      selectedLevel: 0,
      results: undefined
    }
  ),
  components: {
    RollBank,
    Difficulty,
    Roll,
    Results,
    Reset
  },
  methods: {
    handleDiceSelected: function(event) {
      this.selectedDice = event;
    },
    handleDifficultySelected: function(event) {
      this.selectedLevel = event;
    },
    handleRollResults: function(event) {
      this.results = event;
    },
    handleReset: function() {
      this.results = undefined;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
