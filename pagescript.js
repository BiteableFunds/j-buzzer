var buzzer = document.getElementById("bzr");
var buzzerdisplay = document.getElementById("bzrdisplay");

function buzzerPress() {
  let timestamp = Date.now();
  buzzerdisplay.innerHTML = `buzzed in at: ${timestamp}`;
}
