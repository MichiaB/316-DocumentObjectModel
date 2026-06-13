const output = document.getElementById("output");

const lightRoast = [
  "How Should I Know?",
  "You Should Ask Your Therapist",
  "Why are you asking a inanimate object about your Future?",
  "Have you considered asking someone qualified?",
  "Why are you asking a me instead of making a decision?",
  "My lawyer advised me not to answer that.",
  "The council has reviewed your question and remains confused.",
  "Your future is loading... please wait.",
  "That's above my pay grade.",
];

const mediumRoast = [
 "The spirits say yes... unfortunately, they also said that's usually your first mistake.",
  "Absolutely. What could possibly go wrong? Besides everything.",
  "The crystal ball laughed so hard it fogged up. Do with that information what you will.",
  "The answer is yes, but confidence and competence are two different things.",
  "Signs point to success. Your track record, however, remains unconvinced.",
  "The universe supports your decision. For entertainment purposes.",
  "My vision shows you achieving your goal after ignoring three obvious warning signs.",
  "The stars say you're on the right path. Try not to wander off it immediately.",
  "A great opportunity is coming your way. Please try not to scare it away.",
  "The future looks bright. That's probably because someone more qualified turned the lights on."
];


const darkRoast = [

    "The spirits said no. They didn't even need to think about it.",
  "That's certainly an idea. Not a good one, but an idea.",
  "The crystal ball just rolled its eyes.",
  "The future looks promising for everyone involved except you.",
  "The spirits would like to know if this is a joke.",
  "Your odds of success have been described as 'adorable.'",
  "The spirits laughed. Then they refused to elaborate.",
  "Your future self is already tired.",
  "Honey, the spirits asked if you've considered making better choices.",
  "Child, the answer is yes. The question is why."

]


let index = 0;

// click function to the button
const button = document.querySelector("button");

// show reply when button click
button.addEventListener("click", submit);




const textbox = document.createElement("TextBox");
element.id = "Textbox"; 


for (let i = 0 ; i < lightRoast; i++){
  console.log(lightRoast);
}

for (let i= 0 ; i < mediumRoast; i++){
  console.log(mediumRoast);
}

for(let i = 0 ; i < darkRoast; i++){
  console.log(darkRoast);
}


// alert reply

function submit() {
  const randomIndex = Math.floor(Math.random() * lightRoast.length);
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



// attempt at if/else loop ( unable to get this to work)


//submitButton.addEventListener("click", () => {
  //  let submit = prompt ("Ask me a Question to know your Fortune");
  //  if (submit === null) {
    //    log.innerText = "Do you expect me to see the Future? Do I look like a Fortune Teller";
    //        } else if ( submit.toLowerCase()=== "") {
    //            log.innerText = " How should I know?"  
     ///       } else if( submit.toLowerCase () === "") {
      //          log.innerText = "Don't Quit Your Day Job Honey"
      //      }
 ////   console.log(submitButton);
//});







// attempt at try/catch>> unsure if this code fully works; I like the earlier code and how it works better.

//function tellAnswer(){
 // try{
 //   const question = document.getElementById('question').value.trim();
   // if (question ==="")
 //     throw new Error ("You have to ask a question first");
 /// }
 // if (!dquestion.edsWith("?")){
 //   throw new Error("That doesn't look like a question.");
 // } catch (error):

  //alert(error.message);


//}