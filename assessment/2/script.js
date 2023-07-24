const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let searchButtonDom = document.querySelector("#searchButton");
let resultsDom = document.querySelector("#results");
let inputWordDom = document.querySelector("#inputWord");

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("user pressed enter");
    getDefinition();
  }
});

function getDefinition() {
  console.log(inputWordDom.value);
  resultsDom.textContent = "";
  let htmlLoading = `<h2 class="error">Load Information!</h2>`;
  resultsDom.insertAdjacentHTML("beforeend", htmlLoading);
  fetch(`${url}${inputWordDom.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid request.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const meanings = data[0].meanings || [];
      const phonetics = data[0].phonetic;

      for (i = 0; i < meanings.length; i++) {
        const definitions = meanings[i].definitions || [];

        for (j = 0; j < definitions.length; j++) {
          const definition = definitions[j].definition || "";
          const example = definitions[j].example || "";
          let html = `<div class="card"><h2>${data[0].word}</h2><p class="phonetics">${phonetics}</p><div class="definition"><p class="definition">${definition}</p></div><div class="example"><p class="example">${example}</p></div>`;
          resultsDom.innerHTML = "";
          resultsDom.insertAdjacentHTML("beforeend", html);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      resultsDom.textContent = "";
      let htmlError = `<h2 class="error">Sorry! Word is not within my vocabulary!</h2>`;
      resultsDom.insertAdjacentHTML("beforeend", htmlError);
    });
}
