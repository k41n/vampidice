<template>
  <div class="results">
    <div class="results-short" v-bind:class="resultShortClass">
      {{ resultShort }}
      <div class="short-desc">
        {{ shortDesc }}
      </div>
    </div>
    <div class="log">
      <h2>{{ `${results.rolls} бросков со сложностью ${results.difficulty}` }}</h2>
      <div v-for="line in results.rollLog" v-bind:key="line">
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["results"],
  computed: {
    resultShort: function() {
      const { successes, epicFailure } = this.results;
      if (epicFailure) {
        return `EPIC FAIL ${-successes}`;
      }
      if (successes === 0) {
        return "Неудача (0)";
      }
      if (successes === 1) {
        return "Незначительный успех (1)";
      }
      if (successes === 2) {
        return "Средний успех (2)";
      }
      if (successes === 3) {
        return "Отличный успех (3)";
      }
      if (successes === 4) {
        return "Выдающийся успех (4)";
      }
      if (successes >= 4) {
        return `Феноменально (${successes})`;
      }
    },
    shortDesc: function() {
      const { successes } = this.results;
      if (successes === 1) {
        return "поддерживать сломанный холодильник в рабочем состоянии, пока не приедет мастер";
      }
      if (successes === 2) {
        return "смастерить что-то отвратительное, но полезное";
      }
      if (successes === 3) {
        return "отремонтировать что-то, чтобы оно стало как новенькое";
      }
      if (successes === 4) {
        return "увеличить эффективность вашей машины в процессе ее ремонта";
      }
      if (successes >= 4) {
        return "создать шедевр";
      }
    },
    resultShortClass: function() {
      const { epicFailure, successes } = this.results;
      return {
        "epic-fail": epicFailure,
        failure: successes === 0,
        success: successes > 0 && successes < 3,
        "good-success":
          successes >= 3 && successes < 5,
        "epic-success": successes >= 5
      };
    }
  }
};
</script>

<style scoped>
.results {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
}

.results-short {
  align-items: center;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  font-size: 48px;
  min-height: 200px;
  min-width: 200px;
  padding: 20px;
}

.epic-fail {
  border: solid 1px red;
  color: red;
}

.success {
  border: solid 1px #699;
  color: #699;
}

.good-success {
  border: solid 1px #690;
  color: #690;
}

.epic-success {
  border: solid 1px #690;
  color: #690;
}

.failure {
  border: solid 1px #960;
  color: #960;
}

.log {
  padding: 10px;
  text-align: left;
}

.short-desc {
  display: inline-block;
  font-size: 22px;
  text-align: left;
}
</style>
