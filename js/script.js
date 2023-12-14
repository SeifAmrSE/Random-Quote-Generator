


var randomQuotes = [
  '"Be the change that you wish to see in the world." <br/> <br/> --Mahatma Gandhi',
  '"A room without books is like a body without a soul." <br/> <br/> --Marcus Tullius Cicero',
  '"In three words I can sum up everything I have learned about life: it goes on." <br/> <br/> --Robert Frost',
  '"A friend is someone who knows all about you and still loves you." <br/> <br/> --Elbert Hubbard',
];

function changeQuote() {

    var quoteNum = Math.floor((Math.random() * randomQuotes.length));

    document.getElementById("quote").innerHTML = randomQuotes[quoteNum];


    console.log(quoteNum);
}

changeQuote();

