<template>
  <a class="roll" v-on:click="handleRoll">Бросить</a>
</template>

<script>
export default {
  name: "Roll",
  props: [
    "difficulty",
    "rolls"
  ],
  methods: {
    handleRoll: function() {
      console.log('this', this);
      console.log(`Roll ${this.rolls} times with ${this.difficulty} difficulty`);
      const results = {
        successRolls: 0,
        failureRolls: 0,
        successes: 0,
        epicFailure: false,
        rollLog: [],
        difficulty: this.difficulty,
        rolls: this.rolls,
      }
      for (let i = 0; i < this.rolls; i++) {
        const rolled = Math.floor(Math.random() * 10 + 1);
        if (rolled >= this.difficulty) {
          results.successRolls += 1;
          results.successes += 1;
          results.rollLog.push(`Rolled ${rolled} -> SUCCESS!`);
        } else {
          if (rolled === 1) {
            results.successes -= 1;
            results.rollLog.push('Rolled CRITICAL FAILURE!');
          } else {
            results.rollLog.push(`Rolled ${rolled} -> Failure`);
          };
        }
      }
      if (results.successes < 0) {
        results.epicFailure = true;
      }
      this.$emit('roll-results', results);
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