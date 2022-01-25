const quoteContainer = document.querySelector(`#quote-container`);
const quoteText = document.querySelector(`#quote`);
const authorText = document.querySelector(`#author`);
const twitterBtn = document.querySelector(`#twitter`);
const newQueteBtn = document.querySelector(`#new-quote`);
const loader = document.querySelector(`#lds-dual-ring`);

let apiQuoted = [];

let newQuote = function () {
  
  const quote = apiQuoted[Math.floor(Math.random() * apiQuoted.length)];
  //   console.log(quote);

  if (!quote.author) {
    authorText.textContent = `Unknown`;
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 50) {
    quoteText.classList.add(`long-text`);
  } else {
    quoteText.classList.remove(`long-text`);
  }

  quoteText.textContent = quote.text;
 
};

const getQuotes = async function () {

  const apiURL = `https://type.fit/api/quotes`;

  try {
    const response = await fetch(apiURL);
    apiQuoted = await response.json();
    newQuote();
  } catch (error) {
    alert(`${error}`);
  }
};
getQuotes();

const tweetQuote = function () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};
newQueteBtn.addEventListener(`click`, newQuote);
twitterBtn.addEventListener(`click`, tweetQuote);
