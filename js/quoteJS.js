//Problem: There is no user interactivity
	//pressing the New Quote button does not produce desired results
//Solution: Add interactivity so user can get an uplifting motivational quote


var insert = document.getElementById("quote"); // element with id #quote
var mButton = document.getElementsByClassName('btn')[0]; // first element with class .btn
var fButton = document.getElementsByClassName("btn")[1]; // second element with class .btn

var quotes = [
          "f“When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.” - Bob Monkhouse", 
          "f“Always borrow money from a pessimist. He won’t expect it back.” - Oscar Wilde", 
          "f“A bargain is something you don’t need at a price you can’t resist.” - Franklin Jones", 
          "f“If you think nobody cares if you’re alive, try missing a couple of car payments.” - Flip Wilson", 
          "f“My favorite machine at the gym is the vending machine.” - Caroline Rhea", 
          "f“Patience is something you admire in the driver behind you, but not in one ahead.” - Bill McGlashen", 
          "f“I intend to live forever. So far, so good.” - Steven Wright", 
          "f“When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.” - Norm Crosby", 
          "f“The trouble with being punctual is that nobody’s there to appreciate it.” - Franklin P. Jones",
          "f“The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.” - George Jessel", 
  
          "m“Age is no barrier. It’s a limitation you put on your mind.” – Jackie Joyner-Kersee", 
          "m“Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it. – Michael Jordan", 
          "m“There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do.” – Derek Jeter", 
          "m“It always seems impossible until its done.” – Nelson Mandela", 
          "m“Your time is limited, so don’t waste it living someone else’s life.” – Steve Jobs", 
          "m“The best revenge is massive success.” – Frank Sinatra", 
          "m“I can accept failure, everyone fails at something. But I can't accept not trying.” – Michael Jordan", 
          "m“The only good is knowledge and the only evil is ignorance.” – Socrates", 
          "m“People often say that motivation doesn't last. Well, neither does bathing – that's why we recommend it daily.” – Zig Ziglar", 
          "m“My confidence comes from the daily grind - training my butt off day in and day out.” – Hope Solo"
];

//filter(long way)
function filter(array, testCallback) {
  var pass = [];
  for(var i = 0; i < array.length; i++) {
    if(testCallback(array[i])) {
      pass.push(array[i]);
    }
  }
  return pass;
}

//map(long way)
function map(array, callback) {
  var mapped = [];
  for(var i = 0; i < array.length; i++) {
    mapped.push(callback(array[i]));
  }
  return mapped;
}

//create a function that inserts quote into the p element
var insertMotivationalQuote = function() { 
  function containsM(el) {
    return el.charAt(0) === "m";
  }
  
  var motivQ = map(filter(quotes, containsM), removeFirst);
  var randomM = Math.floor(Math.random() * motivQ.length);
  insert.innerText = motivQ[randomM];
}

var insertFunnyQuote = function() {
  function containsF(el) {
    return el.charAt(0) === "f";
  }
  
  var funnyQ = map(filter(quotes, containsF), removeFirst);
  var randomF = Math.floor(Math.random() * funnyQ.length);
  insert.innerText = funnyQ[randomF];
}

function removeFirst(el) {
    return el.slice(1);
}

//bind the button such that
	//if the button is clicked
	//the insertQuote function will be executed.
mButton.addEventListener("click", insertMotivationalQuote);
fButton.addEventListener("click", insertFunnyQuote);

