function score() {
  var score = 0;
  var ans1 = document.getElementById("profession1").Checked;
  document.getElementById("profession1").Checked = true;
  if (ans1 == true) {
    score+=1;
  }
  else{
    score+=0;
  }
  var ans2 = document.getElementById("python").Checked;
  document.getElementById("python").Checked = true;
  if (ans2 == true) {
    score+=1;
  }
  else{
    score+=0;
  }
  var ans3 = document.getElementById("Physcology").Checked;
  document.getElementById("Physcology").Checked = true;
  if (ans3 == true) {
    score+=1;
  }
  else{
    score+=0;
  }
  var ans4 = document.getElementById("Yes").Checked;
  document.getElementById("Yes").Checked = true;
  if (ans4 == true) {
    score+=1;
  }
  else{
    score+=0;
  }
  var ans5 = document.getElementById("html").Checked;
  document.getElementById("html").Checked = true;
  if (ans5 == true) {
    score+=1;
  }  else{
    score+=0;
  }
  var ans6 = document.getElementById("h6").Checked;
  document.getElementById("h6").Checked = true;
  if (ans6 == true) {
    score+=1;
  }  else{
    score+=0;
  }
  var ans7 = document.getElementById("list").Checked;
  document.getElementById("list").Checked = true;
  if (ans7 == true) {
    score+=1;
  }  else{
    score+=0;
  }
  var ans8 = document.getElementById("java2").Checked;
  document.getElementById("java2").Checked = true;
  if (ans8 == true) {
    score+=1;
  }  else{
    score+=0;
  }
  var ans9 = document.getElementById("ol").Checked;
  document.getElementById("ol").Checked = true;
  if (ans9 == true) {
    score+=1;
  }  else{
    score+=0;
  }
  var ans10 = document.getElementById("html2").Checked;
  document.getElementById("html2").Checked = true;
  if (ans10 == true) {
    score+=1;
  }  else{
    score+=0;
  }

  document.getElementById("score").value = score;
}
