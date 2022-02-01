const quotes = [
{
    quote: "Nothing will work unless you do.",
    author: "Maya Angelou"
},
{
    quote: "If you want to go fast, go alone. If you want to go far, go together!",
    author: "Unknown"
},
{
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand"
},
{
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D.Rockefeller"
},
{
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman"
},
{
    quote: "Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley"
},
{
    quote: "Use what talents you possess, the woods will be very silent if no birds sang there except those that sang best.",
    author: "Henry van Dyke"
},
{
    quote: "They always say time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
},
{
    quote: "Courage doesn't always roar. Somethimes courage is the little voice at the end of the day that says I'll try again tomorrow.",
    author: "Mary Anne"
},
{
    quote: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
    author: "Socrates"
}]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author