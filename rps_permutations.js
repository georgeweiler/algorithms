//Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
/*
EXAMPLES:
roundCount:1 [ "r", "p", "s" ]
roundCount:2 [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
roundCount:0 [ ]
*/

function rps(roundCount){
  var rps = ["r", "p", "s"];
  var plays = [];
  (function subRoutine(playSoFar, roundsRemaining){
    if(roundsRemaining === 0){
      plays.push(playSoFar);
      return;
    }
    for(var i = 0; i<rps.length; i++){
      subRoutine(playSoFar + rps[i], roundsRemaining - 1)
    }
  })("", roundCount);
  return plays
}