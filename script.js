function generateJoke(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "The poem goes here",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generateJoke);
