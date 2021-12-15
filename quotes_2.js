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
  "Chomsky is thrown in the air from Barra, to Ander, to Tilion, who raspberrys his belly to reward him discovering the troll's treasure.",
  "\"In a professional manner, but also in a pervy priest manner, I want to look at her legs.\"",
  "\"Hilda: \"Hope us abandoned us\". Ander: \"No my lady, hope is sitting across the table.\"",
  "\"I touch myself. To fill myself with Torm's glorious light, of course.\"",
  "Barra: I cast disguise self and make myself look like Ander and go, \"Meep meep meep meeeep meeeh!\"",
  "Tilion: \"We are merchants ourselves.\" Merchant: \"Oh really? What do you sell?\" Tilion: \"DEEZ NUTS.\"  *Tilion exits*",
  "\"We should have kept an eye on (Gary) Glitter among the halflings...\",
  "Bren: \"Do you ever use the word 'Nuglets'?\""
]

//Add greeting before first change
$("#quoteDisplay").text(rando(quotes).value);

setTimeout(function() {
  animateChange();
  setInterval(animateChange, 6500);
}, 4000);


function animateChange() {
  $("#quoteDisplay").fadeOut(1500, function() { $("#quoteDisplay").text(rando(quotes).value); }).delay(500).fadeIn(1500);
}
