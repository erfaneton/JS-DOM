//varibales

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Victory is not never to fall, It is to rise after every fall"`,
    person: `Mahatma Gandhi`
}, {
    quote: `"A clever person solves a problem
    But a Wise one prevents facing it"`,
    person: `Albert Einstein`
}, {
    quote: `"The most immodest rulers are those who
    attribute their faults and insufficiencies to their people"`,
    person: `Great Orod`
}, {
    quote: `"You can hardly find someone among Geniuses around the world that doesn’t have a kind of special religious feeling for him/herself
    this religion is different from ordinary people’s religion"`,
    person: `Albert Einstein`
}, {
    quote: `"You can cure racism and hate by injecting music and love into people’s lives"`,
    person: `Bob Marley`
}, {
    quote: `"It is wise to keep in mind that neither success nor failure is ever final"`,
    person: `Roger Babson`
}, {
    quote: `"We lie loudest when we lie to ourselves"`,
    person: `Eric Hoffer`
}, {
    quote: `"There are things that are so serious that you can only joke about them"`,
    person: `Werner Heisenberg`
}, {
    quote: `"It is only intelligence that is divided equally between people
    because everybody thinks he/she is enough wise"`,
    person: `René Descartes`
}, {
    quote: `"My father chose my name,  and my last name was chosen by my ancestors
    That’s enough, I myself choose my way"`,
    person: `Ali Shariati`
}, {
    quote: `"The country which forgets its own legends
    tries to satisfy itself by other countries’ legends
    Children of such a dynasty are open and vulnerable"`,
    person: `Great Orod`
}, {
    quote: `"Put your hand on a hot stove for a minute, and it seems like an hour
    Sit with a pretty girl for an hour, and it seems like a minute
    That’s Relativity"`,
    person: `Albert Einstein`
}, {
    quote: `"Man would indeed be in a poor way if he had to be restrained by fear of punishment and hope of reward after death"`,
    person: `Albert Einstein`
}, {
    quote: `"Stop judging others in order to meet composure"`,
    person: `Deepak Chopra`
}, {
    quote: `"The only difference between me and these people is my place of birth
    and this is not a big difference"`,
    person: `Howard Baskerville`
}];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


});