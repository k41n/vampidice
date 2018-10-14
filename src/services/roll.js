export default (difficulty, rolls) => {
  const results = {
    successRolls: 0,
    failureRolls: 0,
    successes: 0,
    epicFailure: false,
    rollLog: [],
    difficulty: difficulty,
    rolls: rolls + 1
  };
  for (let i = 0; i <= rolls; i++) {
    const rolled = Math.floor(Math.random() * 10 + 1);
    if (rolled >= difficulty) {
      results.successRolls += 1;
      results.successes += 1;
      results.rollLog.push(`Rolled ${rolled} -> SUCCESS!`);
    } else {
      if (rolled === 1) {
        results.successes -= 1;
        results.rollLog.push("Rolled CRITICAL FAILURE!");
      } else {
        results.rollLog.push(`Rolled ${rolled} -> Failure`);
      }
    }
  }
  if (results.successes < 0) {
    results.epicFailure = true;
  }
  return results;
};
