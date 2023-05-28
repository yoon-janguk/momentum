const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        author: "Helen Keller",
        quote: "Life is either a daring adventure or nothing at all.",
    },
    {
        author: "Hans Christian Andersen",
        quote: "To Travel is to Live",
    },
    {
        author: "Albert Einstein",
        quote: "Only a life lived for others is a life worthwhile.",
    },
    {
        author: "Mae West",
        quote: "You only live once, but if you do it right, once is enough.",
    },
    {
        author: "Hemmingway",
        quote: "Never go on trips with anyone you do ntot love.",
    },
    {
        author: "Hilaire Belloc",
        quote: "We wander for distraction, but we travel for fulfilment.",
    },
    {
        author: "Sheda Savage",
        quote: "Travel expands the mind and fills the gap.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;