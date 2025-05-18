function displayJoke(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");

  let apiKey = "733615547b11515efo464ab9111t0c1b";
  let prompt = `User instructions: Please generate a poem about ${userInstructions.value}`;
  let context =
    "You are a poem expert who likes to write short, fun, and sweet poems. Your mission is to generate 4-line poems in basic HTML, separating each line with a <br />. Please make sure to follow the user instructions. Never include a title to the poems and always sign each poem with 'Your Favorite Poem Generator' inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generateJoke);
