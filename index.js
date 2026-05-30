const answers = [
  "How Should I Know",
  "You Should Ask Your Therapist",
  "Why are you asking a inanimate object about your Future? ",
];

const button = document.getElementById("button");
console.log(" ");

button.addEventListener("click", showAsnwer);

function showAsnwer() {
   
    document.getElementById("answer").textContent= " N/A ";
}