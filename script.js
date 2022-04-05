function generateTeams () {
  document.getElementById("teams").innerHTML = "";
  let players = document.getElementById("players").value;
  players = players.split(/(\r\n|\r|\n)/);
  players = players.filter(player => /[a-z]/i.test(player));
  const numTeams = Math.min(Number(document.getElementById("num-teams").value),players.length);
  for (i = 0; i < numTeams; i++) {
    const team = document.createElement("p");
    team.innerHTML = `Group ${i +1}: `;
    teams.appendChild(team);
  }
  let curTeam = 0;
  while (players.length>0) {
    var rndIndex = Math.floor(Math.random()*players.length);
    const player = players.splice(rndIndex, 1);
    const newTeam = document.getElementById("teams").getElementsByTagName("p")[curTeam]; 
    let playerText = document.createTextNode(` ${player} vs`);
    if (players.length < numTeams) {
      playerText = document.createTextNode(` ${player}`);
    }
    newTeam.appendChild(playerText);
    if (curTeam < numTeams-1) {
      curTeam ++;
    } else {
      curTeam = 0;
    }
  }
}

