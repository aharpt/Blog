var Posts = [

  {
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up"
  },

  {
    title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    subtitle: "lorem ipsum"
  },

  {
    title: "Science has not yet mastered prophecy",
    subtitle: "We predict too much for the next year and yet far too little for the next ten."
  },

  {
    title: "Failure is not an option",
    subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations."
  },

  {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolo sit amet"
  },

  {
    title: "Lorem Ipsum Two",
    subtitle: "Lorem ipsum dolor sit amet."
  }
];

// get random post

var randomNumber = function(highNumber) {
  var randomNumber = Math.floor(Math.random() * highNumber);
  return randomNumber;
};

var numbersUsed = [];

var randomPost = function(index) {

  var randomNumber2 = randomNumber(Posts.length);

  while (numbersUsed.includes(randomNumber2)) {
    var randomNumber2 = randomNumber(Posts.length);
  }

  document.querySelectorAll(".post-title")[index].innerHTML = Posts[randomNumber2].title;
  if (document.querySelectorAll(".post-subtitle")[index]) {
    document.querySelectorAll(".post-subtitle")[index].innerHTML = Posts[randomNumber2].subtitle;
  }
  numbersUsed.push(randomNumber2);
};


var getRandomPost = function() {
  randomPost(0);
  randomPost(1);
  randomPost(2);
  randomPost(3);
  
};

getRandomPost();
