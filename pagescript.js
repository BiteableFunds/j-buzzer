var buzzer = document.getElementById("bzr")
var buzzerdisplay = document.getElementById("bzrdisplay")
var selectedTeam = 0

function setDisplay(timestamp) {
  var date = new Date(timestamp).toLocaleTimeString("en-US")
  buzzerdisplay.innerHTML = `buzzed in at: ${date} ${unixtimestamp}`
}

async function sendTimeData(team, timestamp) {
  const endpoint = new URL('https://77220z28-20000.use.devtunnels.ms/teams');
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      team: team,
      timestamp: unixtimestamp
    })
}

function bzrPress(team) {
  let unixtimestamp = Date.now();
  setDisplay(unixtimestamp);
  sendTimeData(team, unixtimestamp);
}

buzzer.addEventListener("click", bzrPress(selectedTeam));
