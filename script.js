document.addEventListener("load", getImage());


function getImage() {

  const array=["Harem", "365", "ironman", "ALLAH", "Coding"]

  const container = document.querySelector(".img-container");
  container.innerHTML = "";
  const inputValue = document.querySelector(".input");
  let input = inputValue.value;
  inputValue.value = "";
  const accessKey = "yRanAx-gZbvnHDMOjrD6e7TR4zfPOjKw91SQLoFY2o0";
  const URL = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${input || array[Math.floor(Math.random()*5)]}`;
  fetch(URL)
    .then((res, err) => {
      return res.json();
    })
    .then((data) => {
      data.results.forEach(e => {
        container.innerHTML += `<div class="img">
        <img src="${e.links.download}" alt="${input}">
                               </div>`;

      });
    })
    .catch((err) => {
      console.log(err);
    });
}