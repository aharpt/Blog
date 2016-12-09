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

function randomNumber(highNumber) {
  var randomNumber = Math.floor(Math.random() * highNumber);
  return randomNumber;
}

function getRandomPost() {

  // getting first random quote

  var randomNumber1 = randomNumber(Posts.length);
  var post1Title = document.getElementsByClassName("post-title")[0].innerHTML = Posts[randomNumber1].title;
  var post1SubTitle = document.getElementsByClassName("post-subtitle")[0].innerHTML = Posts[randomNumber1].subtitle;

  // keeping track of numbers already used

  var numbersUsed = [];
  numbersUsed.push(randomNumber1);

  // random quote 2

  var randomNumber2 = randomNumber(Posts.length);

  // while random number mathes an item in the array, get a new random number
  // How to check is a value is in an array http://stackoverflow.com/questions/7378228/check-if-an-element-is-present-in-an-array Stack Overflow MIT License
  while (numbersUsed.includes(randomNumber2)) {
    var randomNumber2 = randomNumber(Posts.length);
  }

  // Sets random quote and pushes random number to numbersUsed array
  
  document.querySelectorAll(".post-title")[1].innerHTML = Posts[randomNumber2].title;
  document.querySelectorAll(".post-subtitle")[1].innerHTML = Posts[randomNumber2].subtitle;
  numbersUsed.push(randomNumber2);

  // random quote 3

  var randomNumber3 = randomNumber(Posts.length);

  while (numbersUsed.includes(randomNumber3)) {
    var randomNumber3 = randomNumber(Posts.length);
  }

  document.querySelectorAll(".post-title")[2].innerHTML = Posts[randomNumber3].title;
  document.querySelectorAll(".post-subtitle")[2].innerHTML = Posts[randomNumber3].subtitle;
  numbersUsed.push(randomNumber3);


  // random quote 4

  var randomNumber4 = randomNumber(Posts.length);

  while (numbersUsed.includes(randomNumber4)) {
    var randomNumber4 = randomNumber(Posts.length);
  }


  document.querySelectorAll(".post-title")[3].innerHTML = Posts[randomNumber4].title;
  document.querySelectorAll(".post-title")[3].innerHTML = Posts[randomNumber4].subtitle;
  numbersUsed.push(randomNumber4);
}

getRandomPost();
