// COIN FLIP SIMULATOR

// Html Variable

// Count Variables

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = document.getElementById("output");

  if (input === "is javascript awesome") {
    output.innerHTML = "Of course";
  } else if (input === "does magic 8 ball really work?") {
    output.innerHTML = "How dare you doubt me!";
  } else if (input === "") {
    output.innerHTML = "Please enter a question";
  } else {
    let randNum = Math.random();
    if (randNum < 0.2) {
      output.innerHTML = "Without a doubt";
    } else if (randNum < 0.4) {
      output.innerHTML = "As I see it, yes";
    } else if (randNum < 0.6) {
      output.innerHTML = "Concentrate and ask again";
    } else if (randNum < 0.8) {
      output.innerHTML = "Don't count on it";
    } else {
      output.innerHTML = "Outlook not so good";
    }
  }
}
