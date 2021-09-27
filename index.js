// assigment quiz on processors.
// add libaries 
var readlinesync = require("readline-sync");
//  defined 
var score = 0;

// heading
console.log("---------------------------------------------------------------------");
console.log("WELCOME, TEST YOUR BRAIN HERE!");
console.log("----------------------------------------------------------------------");
var userid = readlinesync.question("ENTER YOUR NAME: ");
console.log("Hello ", userid, "now you are entering into the game");
console.log("-----------------------------------------------------------------------");
// end heading 

// required function for quiz 
function proquiz(que, ans) {
  var userans = readlinesync.question(que);

  if (userans === ans) {
    console.log("Awesome you are genius");
    score = score + 1;
  } else {
    console.log("OHH! sorry better luck next time!");

  }
  console.log("Hey", userid, "your score is ", score);

}

//  TEST WITHOUT ARRAY
// proquiz("Intel I9 cores? ", "10");


// define array and objects.
var quearr = [{
    que: "The operation that does not involves clock cycles is____\n(a) Installation of a device\n(b) Execute\n(c) Fetch\n(d)Decode ",


    ans: "a"

  },

  {
    que: "It takes one clock cycle to perform a basic operation___\n(a) True\n(b) False ",

    ans: "a",


  },

  {
    que: "MAR stands for __________\n(a) Memory address register\n(b) Main address register\n(c) Main accessible register\n(d)Memory accessible register ",


    ans: "a"

  },


  {
    que: "The number of clock cycles per second is referred as ___\n(a) Clock speed\n(b) Clock frequency \n(c) Clock rate\n(d)Clock timing ",


    ans: "a"

  },

  {
    que: "Which of the following processor has a fixed length of instructions?\n(a) CISC\n(b) RISC \n(c) EPIC\n(d) Multi-core",


    ans: "b"

  },

];
//alternative
// var arrsize = quearr.length;
// for (i=0;i<=arrsize;i++){
//   var currentquestion = quearr[i];

//  proquiz(currentquestion.que,currentquestion.ans);


// }

for (let que in quearr) {
  proquiz(quearr[que].que, quearr[que].ans);
}



if (score === 5) {
  console.log("-------------------------------------------------------");
  console.log("Congrats you are being taken to next level");
} else {

  console.log("-------------------------------------------------------");
  console.log("Sorry you are disqulaified");



}

// var quearr = [ 
//   {
//     que: "The operation that does not involves clock cycles is____\n(a) Installation of a device\n(b) Execute\n(c) Fetch\n(d)Decode ",


//     ans: "a"

//   },

//   {
//     que: "It takes one clock cycle to perform a basic operation___\n(a) True\n(b) False ",

//     ans:"a",


//   },

//    {
//     que: "MAR stands for __________\n(a) Memory address register\n(b) Main address register\n(c) Main accessible register\n(d)Memory accessible register ",


//     ans: "a"

//   },

// ];

// for (let que in quearr){
//   proquiz(quearr[que].que , quearr[que].ans);
// }