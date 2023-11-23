var buzzer = document.getElementById("bzr")
var buzzerdisplay = document.getElementById("bzrdisplay")

// fix height
buzzer.style.height = "300px";

function buzzerPress() {
  let unixtimestamp = Date.now();
  var date = new Date(unixtimestamp).toLocaleTimeString("en-US")
  buzzerdisplay.innerHTML = `buzzed in at: ${date} ${unixtimestamp}`
}
