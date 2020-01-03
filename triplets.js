//Compare the Triplets on HackerRank.com

function compareTriplets(a, b) {
  let scores = [0, 0];
  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? (scores[0] += 1) : null;
    a[i] < b[i] ? (scores[1] += 1) : null;
  }
  return scores;
}
