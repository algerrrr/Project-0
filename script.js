var element = document.getElementById("typewriter");
const intro = document.querySelector('.intro')
const primary = document.querySelector('.primary')
document.addEventListener("DOMContentLoaded", function () {

  var typingSpeed = 100; // Adjust typing speed (milliseconds)


  function typeWriter(text) {
    var i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
      }
    }

    element.innerHTML = ""; // Clear existing content before typing new text
    setTimeout(type, typingSpeed);
  }

  // Array of texts to display
  var texts = ["Hi!", "My name is Algernon", "Welcome to my page"];

  // Call the typeWriter function for each text in the array
  texts.forEach(function (text, index) {
    setTimeout(function () {
      typeWriter(text);
    }, index * (1500 + typingSpeed * text.length)); // Change text every 1.5 seconds
  });
});

setTimeout(function(){
    element.remove()
intro.style.display = "block"
primary.style.display = "block"
},12000)

document.addEventListener("DOMContentLoaded", function(){
  var background = document.querySelector('.background-image');
  
  setTimeout(function () {
    background.classList.add('resizing');
  }, 12000) // Add the "resizing" class after 12 seconds (12000 milliseconds)
});



const box = document.getElementById("box");
let isDragging = false;
let initialX;
let initialY;

box.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = e.clientX - box.getBoundingClientRect().left;
  initialY = e.clientY - box.getBoundingClientRect().top;
  box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const offsetX = mouseX - initialX;
  const offsetY = mouseY - initialY;
  box.style.left = offsetX + "px";
  box.style.top = offsetY + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  box.style.cursor = "grab";
});
