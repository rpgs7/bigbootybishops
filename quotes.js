var quotes = [
  "\"Ander is wearing \"f*** me\" boots...\"",
  "Chomsky tickles the back of the throat of the frog and is chundered out, saving him from an embarrasing death.",
  "Tilion spits straight viscious fire at the unsuspecting rat, causing him to be shamed to death...",
  "Kaya suggests greeting a visitor to our home with rope and a side of death.",
  "Bren tries firing into the local ladies, wooing them with tales of the acid\'s composition...",
  "Barra javelins a crow and cooks it in the middle of the street for a wee snack.",
  "\"Games Workshop exudes big paedo energy\"",
  "\"Non flat-earthers = Globecucks.\"",
  "\"MILF's acid arrow?!\"",
  "Barra: \"GET YOUR HANDS OFF MY PENIS!\"",
  "\"I am buzzed on the light of Torm - as always.\"",
  "We woke up one morning and Irky was doing yoga in short shorts.",
  "\"In a professional manner, but also in a pervy priest manner, I want to look at her legs.\"",
  "\"Hilda: \"Hope us abandoned us\". Ander: \"No my lady, hope is sitting across the table.\"",
  "\"I touch myself. To fill myself with Torm's glorious light, of course.\"",
  "Barra: I cast disguise self and make myself look like Ander and go, \"Meep meep meep meeeep meeeh!\""
];

var quotes2 = [];


// setInterval(function newQuote() {
//   var randomNumber = Math.floor(Math.random() * (quotes.length));
//   var newQuote = document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
//   var outq = document.getElementById("quote");
//   return newQuote;
// }, 5200)

function getNew() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    //var getNew = document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    
    var spliceQuote = quotes.splice(randomNumber, 1);
    quotes2.push(spliceQuote);
    //print(spliceQuote);
      
    if (quotes.length == 0) {
        quotes = quotes2;
        quotes2 = [];
    }

    // sayQuote(spliceQuote);

    $(quoteDisplay)
    .fadeIn(2000)
    .delay(1000);
    sayQuote(spliceQuote);
    .fadeOut(2000, getNew())
    .delay(200);

  };



function sayQuote(q) {
  document.getElementById('quoteDisplay').innerHTML = q;
}

// $(quoteDisplay)
// .fadeIn(2000).delay(1000);
// fadeOut(2000, getNew).delay(200);

// }

getNew();





// function fadeOut() {
//     var fadeTarget = document.getElementById("quoteDisplay");
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             fadeTarget.style.display = 'none';
//         }
//         fadeTarget.style.opacity = op;
//         fadeTarget.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }

// function fadeIn() {
//   var op = 0.1;  // initial opacity
//   var fadeTarget = document.getElementById("quoteDisplay");
//   fadeTarget.style.display = 'block';
//   var timer = setInterval(function () {
//       if (op >= 1){
//           clearInterval(timer);
//       }
//       fadeTarget.style.opacity = op;
//       fadeTarget.style.filter = 'alpha(opacity=' + op * 100 + ")";
//       op += op * 0.1;
//   }, 10);
// }






// setInterval(function newQuote() {
//   var randomNumber = Math.floor(Math.random() * (quotes.length));
//   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
// }, 6000)