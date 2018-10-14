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
      if (this.results.epicFailure) {
        return `EPIC FAIL ${-this.results.successes}`;
      }
      if (this.results.successes === 0) {
        return "Неудача (0)";
      }
      if (this.results.successes === 1) {
        return "Незначительный успех (1)";
      }
      if (this.results.successes === 2) {
        return "Средний успех (2)";
      }
      if (this.results.successes === 3) {
        return "Отличный успех (3)";
      }
      if (this.results.successes === 4) {
        return "Выдающийся успех (4)";
      }
      if (this.results.successes >= 4) {
        return `Феноменально (${this.results.successes})`;
      }
    },
    shortDesc: function() {
      if (this.results.successes === 1) {
        return "поддерживать сломанный холодильник в рабочем состоянии, пока не приедет мастер";
      }
      if (this.results.successes === 2) {
        return "смастерить что-то отвратительное, но полезное";
      }
      if (this.results.successes === 3) {
        return "отремонтировать что-то, чтобы оно стало как новенькое";
      }
      if (this.results.successes === 4) {
        return "увеличить эффективность вашей машины в процессе ее ремонта";
      }
      if (this.results.successes >= 4) {
        return "создать шедевр";
      }
    },
    resultShortClass: function() {
      return {
        "epic-fail": this.results.epicFailure,
        failure: this.results.successes === 0,
        success: this.results.successes > 0 && this.results.successes < 3,
        "good-success":
          this.results.successes >= 3 && this.results.successes < 5,
        "epic-success": this.results.successes >= 5
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
