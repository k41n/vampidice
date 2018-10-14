<template>
  <div class="difficulty" v-bind:class= "selected ? 'selected' : ''" v-on:click="handleClick">
    {{ number }}
  </div>
</template>

<script>
export default {
  name: "DifficultyLevel",
  props: ["number", "selected"],
  methods: {
    handleClick: function() {
      this.$emit("difficulty-selected", this.number);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.difficulty {
  align-items: center;
  border-radius: 2vw;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: 48px;
  justify-content: center;
  min-height: 100px;
  min-width: 100px;
}

.difficulty.selected {
  background: #eee;
}
</style>
