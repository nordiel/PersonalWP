const greetings = ["Hello", "Hola", "Bonjour", "Namaste", "Shalom"];
let currentIndex = 0;

function changeGreeting() {
  const spanElement = document.getElementById("greeting");

  // Fade out the greeting text
  spanElement.style.opacity = 0;

  setTimeout(() => {
    // Get the greeting at the current index
    spanElement.textContent = greetings[currentIndex];

    // Fade in the greeting text
    spanElement.style.opacity = 1;

    // Increment the current index
    currentIndex = (currentIndex + 1) % greetings.length;
  }, 500); // Delay the text update to allow for fade-out effect
}

// Call changeGreeting() initially
changeGreeting();

// Call changeGreeting() every 5 seconds (5000 milliseconds)
setInterval(changeGreeting, 5000);
