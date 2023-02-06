/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * contains the quotes for later use, some with citation and years, some without - all with Quote and Source.
***/

const quoteList = [
    {
        quote: 'I like rice. Rice is great when you`re hungry and you want 2,000 of something.',
        source: 'Mike Hedberg',
        citation: 'Just For Laughs On The Edge',
        type: 'Comedy Show',
        year: '2002'
    },
    {
        quote: 'I don`t understand why people would want to get rid of pigeons. They don`t bother no one.',
        source: 'Mike Tyson',
        type: 'Twitter',
        year: '2022',
    },
    {
        quote: 'Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.',
        source: 'Robert T. Kiyosaki',
        citation: 'Rich Dad Poor Dad',
        type: 'Book',
        year: '1997'
    },
    {
        quote: 'Gentlemen, you can`t fight in here. This is the war room.',
        source: 'President Merkin Muffley (Peter Sellers)',
        citation: 'Dr. Strangelove',
        type: 'Movie',
        year: '1964'
    },
    {
        quote: 'Ted Striker: “Surely you can`t be serious.” - Dr. Rumack: “I am serious. And don`t call me Shirley”',
        source: 'Ted Striker (Robert Hays) and Dr. Rumack (Leslie Nielsen)',
        citation: 'Airplane!',
        type: 'Movie',
        year: '1980'
    },
    {
        quote: 'That which does not kill us makes us stronger.',
        source: 'Friedrich Nietzsche',
        type: 'Historical Reference'
    },
    {
        quote: 'Remember no one can make you feel inferior without your consent.',
        source: 'Eleanor Roosevelt',
        type: 'Historical Reference'
    },
    {
        quote: 'Your worth consists in what you are and not in what you have.',
        source: 'Thomas Edison',
        type: 'Historical Reference'
    }
];

/***
 * `getRandomQuote` function
 * selects and stores a random quote from the quoteList
***/

// Selects a random quote from the quoteList and returns it as an object
function getRandomQuote(){
    let quoteNumber = Math.floor(Math.random() * quoteList.length);
    let randomQuote = quoteList[quoteNumber];
    return randomQuote;
};

/***
 * `printQuote` function
 * writes the selected quote to the HTML output in Index.html -> Main -> Div
***/

function printQuote(){
    //calls getRandomQuote to pick a new quote from the quoteList
    let currentQuote = getRandomQuote();

    //the initial part of the HTML formatted quote
    let htmlQuote = `
        <p class="quote"> ${currentQuote.quote}</p><p class="source"> ${currentQuote.source}`;

    //added parts of the HTML formatted quote, depending on IF citation, type or year of quote is available
    if ('citation' in currentQuote) {
        htmlQuote += `<span class="citation"> ${currentQuote.citation}</span>`;
    };
    if ('type' in currentQuote) {
        htmlQuote += `<span class="citation"> ${currentQuote.type}</span>`;
    };
    if ('year' in currentQuote) {
        htmlQuote += `<span class="citation"> ${currentQuote.year}</span>`;
    };

    //finalization of HTML quote, that closes the paragraph
    htmlQuote += `</p>`;

    //assignment of the HMTL to the quote-box of the index.html
    document.getElementById('quote-box').innerHTML = htmlQuote; 

    //randomized color is calculated and added to background of document.body
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = '#' + randomColor;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//automatically calls the printQuote function every 10.0 seconds
setInterval(printQuote, 10000);