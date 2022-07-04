module.exports = function whoseBicycle(diary1, diary2, diary3) {
  const scores = Array.from(arguments).map(diary => {
    let sumOfScores = 0;
    for (let key in diary) {
      sumOfScores += diary[key];
    }
    return sumOfScores;
  });

  const ages = [14, 9, 8]; // age of sons from conditions
  const ordinalNumbers = ['first', 'second', 'third'];

  let result = [];
  for (let i = 0; i < scores.length; i++) {
    result.push({
      'score': scores[i],
      'age': ages[i],
      'output': `I need to buy a bicycle for my ${ordinalNumbers[i]} son.`
    })
  }

  result.sort(function (a, b) {
    if (a['score'] === b['score']) {
      return a['age'] - b['age'];
    }
    return b['score'] - a['score'];
  });

  return result[0]['output'];
}