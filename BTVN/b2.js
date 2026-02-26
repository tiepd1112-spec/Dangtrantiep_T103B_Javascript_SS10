const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35
};

let addPerformanceScore = (player) => {

  let performance =
    (player.goals + player.assists) / player.matchesPlayed;

  player.performancePerMatch = +performance.toFixed(2);

  if (player.performancePerMatch >= 1.0) {
    player.isKeyPlayer = true;
  } else {
    player.isKeyPlayer = false;
  }

  console.log(player);
};

addPerformanceScore(player);
