/* Data to Show*/
const data = [
  {
    quote: `“Every second matters”`,
    emoji: "⏳",
    image: `url(assets/Ekko.jpg)`,
    audio: "assets/Ekko.ogg"
  },
  {
    quote: `“I'm the rose that survived the desert”`,
    emoji: "🥀",
    image: `url(assets/Samira.jpg)`,
    audio: "assets/Samira.ogg"
  },
  {
    quote: `“The rolling golem gathers no rust”`,
    emoji: "🤖",
    image: `url(assets/Blitzcrank.jpg)`,
    audio: "assets/Blitzcrank.ogg"
  },
  {
    quote: `“Time to troll”`,
    emoji: "👹",
    image: `url(assets/Trundle.jpg)`,
    audio: "assets/Trundle.ogg"
  },
  {
    quote: `“Do not fear the shrouded path”`,
    emoji: "🥷",
    image: `url(assets/Zed.jpg)`,
    audio: "assets/Zed.mp3"
  },
  {
    quote: `“The heart is the strongest muscle”`,
    emoji: "❤️",
    image: `url(assets/Braum.jpg)`,
    audio: "assets/Braum.ogg"
  },
  {
    quote: `“To live under a boot is not to live”`,
    emoji: "🥾",
    image: `url(assets/Irelia.png)`,
    audio: "assets/Irelia.ogg"
  },
  {
    quote: `“Change is good”`,
    emoji: "🐛",
    image: `url(assets/Khazix.jpg)`,
    audio: "assets/KhaZix.ogg"
  },
  {
    quote: `“This'll be a blast”`,
    emoji: "💣",
    image: `url(assets/Ziggs.jpg)`,
    audio: "assets/Ziggs.ogg"
  },
  {
    quote: `“We must all make our choices”`,
    emoji: "☮",
    image: `url(assets/Karma.jpg)`,
    audio: "assets/Karma.ogg"
  },
  {
    quote: `“Those who do not know their limits will never reach their potential”`,
    emoji: "🙈",
    image: `url(assets/LeeSin.jpg)`,
    audio: "assets/LeeSin.ogg"
  },
  {
    quote: `“The unworthy are dust, doomed to wither and fade”`,
    emoji: "💀",
    image: `url(assets/Mordekaiser.jpg)`,
    audio: "assets/Mordekaiser.ogg"
  },
  {
    quote: `“Nothing kindles wonder like the beauty of stars”`,
    emoji: "🌌",
    image: `url(assets/AurelionSol.jpg)`,
    audio: "assets/AurelionSol.ogg"
  },
  {
    quote: `“Me, mad? Haha... quite likely”`,
    emoji: "👻",
    image: `url(assets/Thresh.jpg)`,
    audio: "assets/Thresh.ogg"
  },
  {
    quote: `“What's broken can be reforged”`,
    emoji: "❤️‍🩹",
    image: `url(assets/Riven.jpg)`,
    audio: "assets/Riven.ogg"
  }
];
/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");
// Check-Check: change text
quote.innerHTML = "Press Play";
// Check-Check: change emoji text
// Check-Check: background image
bgImage.style.backgroundImage = "url(assets/LeagueBackground.jpg)";
/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");
// get play button for hover sound
const playButton = document.querySelector("img.play");
//get hover audio

playButton.addEventListener("mouseover", function () {
  audio.currentTime = 0.35;
  audio.play();
  
});
playButton.addEventListener("click", function () {
  clickSound.play();
  
});


// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // load in button styling
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
});
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // load in button styling
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  audio.src = data[itemNumber].audio;
  audio.play();
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // load in button styling
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  audio.src = data[randomNumber].audio;
  audio.play();
  audio.currentTime = -5.35;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // load in button styling
    document.querySelector("img.next").src = "assets/next.svg";
    document.querySelector("img.prev").src = "assets/prev.svg";
    document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
    audio.src = data[itemNumber].audio;
    audio.play();
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // load in button styling
    document.querySelector("img.next").src = "assets/next.svg";
    document.querySelector("img.prev").src = "assets/prev.svg";
    document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
    audio.src = data[itemNumber].audio;
    audio.play();
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // load in button styling
    document.querySelector("img.next").src = "assets/next.svg";
    document.querySelector("img.prev").src = "assets/prev.svg";
    document.querySelector("img.random").src = "assets/random.svg";
    document.querySelector("img.play").src = "";

    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
    audio.src = data[randomNumber].audio;
    audio.play();
  }
});
playButton.addEventListener("click", function () {
  // load in button styling
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
   document.querySelector("img.play").src = "";
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  audio.src = data[randomNumber].audio;
  audio.play();
});