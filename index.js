const output = document.getElementById("output");

const answers = [
  "How Should I Know?",
  "You Should Ask Your Therapist",
  "Why are you asking a inanimate object about your Future?",
  "Have you considered asking someone qualified?",
  "Why are you asking a ball instead of making a decision?",
  "My lawyer advised me not to answer that.",
  "The council has reviewed your question and remains confused.",
  "Your future is loading... please wait.",
  "That's above my pay grade.",
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

  // pop up alert for text box

  const question = document.getElementById("question");

  if (question.value.trim() === "") {
    alert("ERROR: Question not found. Have you tried typing one?");
    return;
  }

  if (!question.value.trim().endsWith("?")) {
    alert("Bold strategy. Asking a question without asking a question.");
    return;
  }
  document.getElementById("output").textContent = response;
}
