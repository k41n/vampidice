<template>
  <div class="dice" v-bind:class= "selected ? 'selected' : ''" v-on:click="handleClick">
    {{ number + 1 }}
  </div>
</template>

<script>
export default {
  name: "Dice",
  props: ['number', 'selected'],
  methods: {
    handleClick: function() {
      this.$emit('dice-selected', this.number);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dice {
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

  .dice.selected {
    background: #eee;
  }
</style>

