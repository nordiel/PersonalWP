const greetings = ["Hello", "Hola", "Bonjour", "Namaste", "Shalom"]; // array of greetings

let currentIndex = 0;

function changeGreeting() {

  const spanElement = document.getElementById("greeting");

  // Fade out the greeting text
  spanElement.style.opacity = 0;

  setTimeout(() => {
    // get greeting at the current index
    spanElement.textContent = greetings[currentIndex];

    // fading greeting text
    spanElement.style.opacity = 1;

    //incrementing the current index
    currentIndex = (currentIndex + 1) % greetings.length;
  }, 500); // delaying the text update to allow for fade-out effect
}

changeGreeting();

// calling the changeGreeting() function every 4 seconds
setInterval(changeGreeting, 4000);




