const output = document.getElementById("output");

const answers = [
  "How Should I Know",
  "You Should Ask Your Therapist",
  "Why are you asking a inanimate object about your Future? ",
];

let index = 0;

// click function to the button
const button = document.querySelector("button");

// show reply when button click
button.addEventListener("click", submit);


// alert reply


function submit() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  const response = answers[randomIndex];
  document.getElementById("answers").textContent = response;
}

