/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
// This is a list that stores all of the quotes.

  {quote: "Nothing can resist a human will that will stake its very existence on its purpose.",
  source: "Benjamin Disraeli"},

  {quote: "He who has a why to live for can bear almost any how.",
  source: "Friedrich Nietzsche"},

  {quote: "There is nothing impossible to they who will try.",
  source: "Alexander the Great"},

  {quote: "It is during our darkest moments that we must focus to see the light.",
  source: "Aristotle"},

  {quote: "Either you run the day or the day runs you.",
  source: "Jim Rohn",
  tags:"work"},

  {quote: "The successful man will profit from his mistakes and try again in a different way.",
  source: "Dale Carnegie",
  tags:"success"},

  {quote: "Don't let someone else's opinion of you become your reality.",
  source: "Les Brown"},

  {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  source: "Benjamin Franklin"},

  {quote: "I am not a product of my circumstances. I am a product of my decisions.",
  source: "Stephen R. Covey",
  citation: "7 Habits of Highly Effective People",
  year: 1987},

  {quote: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  source: "Warren Buffet",
  citation: "Of Permanent Value: The Story of Warren Buffett",
  year: 1991,
  tags: "positivity"}
]

/***
 * `getRandomQuote` function
 * 
 * Function should create a random number, and use that random number 
 * to return a random quote object from the quotes array.
 *
 * @returns {string} Returns a random quote object from the quotes array,
 * based on the random number generated. 
 *
***/

function getRandomQuote(){
  const randomNumber = Math.floor((Math.random()*quotes.length))
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * 
 * Three functions: 
 * 1. Call the getRandomQuote function, 
 * 2. Use the returned quote object to build a string of HTML
 * and quote properties
 * 3. Then use that string to display a random quote 
 * in the browser.
***/

function printQuote(){
    const quoteObejct = getRandomQuote();

    let html = `<p class="quote"> ${quoteObejct.quote}</p>
    <p class="source">${quoteObejct.source}`

    // check to see if there is citation
    if (quoteObejct.citation){
      html += `<span class="citation">${quoteObejct.citation}</span>`
    }

    // check to see if year property is present 
    if (quoteObejct.year){
      html += `<span class="citation">${quoteObejct.year}</span>`
    }

    // check to see if there is an additional tag for category of quote
    if (quoteObejct.tags){
      html += `<span class="citation">${quoteObejct.tags}</span>`
    }

    // close off p-tag
    html += "</p>"

    document.getElementById('quote-box').innerHTML = html

    return html;
}

/***
 * `randomColor` function
 * 
 * This is a function that will change the color of the background randomly.
 * @returns {string} Returns a random background color
***/

function randomColor(){
  let red = Math.floor(Math.random() * 256); // random number for red component of RGB
  let green = Math.floor(Math.random() * 256); // random number for green component of RGB
  let blue = Math.floor(Math.random() * 256); // random number for blue component of RGB
  let RGBColor = `rgb(${red},${green},${blue})`;

  document.body.style.background = RGBColor; // change the background color input in the CSS
  return RGBColor;
  }

/***
 * `Timer` function
 * 
 * This is a function that will automatically refresh the quotes every 15s.
 * Function has no returns.
***/

function Timer(){
  randomColor()
  printQuote()
}

setInterval('Timer()', 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", randomColor, false);