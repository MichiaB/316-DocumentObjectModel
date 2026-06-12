const output = document.getElementById("output");

const answers = [
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

const an2 = [
  "Against all odds, you'll actually pull this off.",
  "Success is coming. Try not to trip over it.",
  "Your hard work is about to pay off. Weird how that works.",
  "A big opportunity is headed your way.",
  "You'll achieve something impressive and pretend it's no big deal.",
  "The universe has approved your latest idea.",
  "A goal you've been chasing is finally within reach.",
  "Today is a good day to stop doubting yourself.",
  "Someone important will notice your efforts soon.",
  "Victory is yours. Please act surprised."
];


let index = 0;

// click function to the button
const button = document.querySelector("button");

// show reply when button click
button.addEventListener("click", submit);




const textbox = document.createElement("TextBox");
element.id = "Textbox"; 




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