var buzzer = document.getElementById("bzr");
var buzzerdisplay = document.getElementById("bzrdisplay").innerHTML;

function buzzerPress() {
  let timestamp = Date.now();
  buzzerdisplay = 'buzzed in at: ' + timestamp;
}
