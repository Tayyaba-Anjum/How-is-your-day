const btn1=document.getElementById('button1');
const btn2=document.getElementById('button2');
const btn3=document.getElementById('button3');
const btn4=document.getElementById('button4');
const quote=document.querySelector('.quote');
const thoughtsBox = document.querySelector('.thoughts');


let happyQuotes = [
  "Happiness is not something ready made. It comes from your own actions.",
  "Keep smiling, because life is a beautiful thing and there’s so much to smile about.",
  "The most wasted of all days is one without laughter.",
  "Happiness often sneaks in through a door you didn’t know you left open."
];


btn1.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random() * 4);
    quote.innerText=(happyQuotes[randomIndex]);
})

let sadQuotes = [
  "Tears come from the heart and not from the brain.",
  "Sometimes, you just have to stay silent because no words can explain what’s going on in your mind and heart.",
  "It's okay to feel sad sometimes — it means you cared.",
  "The worst kind of sad is not being able to explain why."
];

btn2.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random() * 4);
    quote.innerText=(sadQuotes[randomIndex]);
})

let angryQuotes = [
  "For every minute you are angry, you lose sixty seconds of happiness.",
  "Speak when you are angry and you’ll make the best speech you’ll ever regret.",
  "Anger is one letter short of danger.",
  "The best fighter is never angry."
];

btn3.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random() * 4);
    quote.innerText=(angryQuotes[randomIndex]);
})

let tiredQuotes = [
  "Sometimes, the most productive thing you can do is rest.",
  "You’re allowed to be both a masterpiece and a work in progress.",
  "Rest is not idleness — it’s how we recover our strength.",
  "It’s okay to be tired. Just don’t quit."
];

btn4.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random() * 4);
    quote.innerText=(tiredQuotes[randomIndex]);
})

// Load saved thoughts (if any)
thoughtsBox.value = localStorage.getItem('userThoughts') || "";

// Save to localStorage on every input
thoughtsBox.addEventListener('input', () => {
    localStorage.setItem('userThoughts', thoughtsBox.value);
});
