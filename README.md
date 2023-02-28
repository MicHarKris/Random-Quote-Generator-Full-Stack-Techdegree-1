# Full-Stack-Techdegree - Project 1
Randomized Quote Generator

This project contains a list of quotes with different key-value pairs, and writes them to the quote-box of the index.html, when the button in the window is pressed, or whenever 10 seconds passes.

Extra Credit: 
- The tag (or key) denoting the 'type' of quote, whether it be from a social media source, a show, a movie or an unclear historical reference, is added to the quote.
- The background colour is randomly chosen each time the getRandomQuote() function is called, either by timer or button click
- the setInterval() function calls the getRandomQuote() function, each time 10 seconds passes.

To-Do (not implemented features):
- A check to keep the selected quote from being repeated twice in a row
- A check to keep the selected background color from being repeated twice in a row (less likely, more colors to randomize between)
- A check to keep the automatic setInterval() function from being called within 10 seconds of a button click
