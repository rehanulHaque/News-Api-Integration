let apiKey = "ae0cd2e087b34d55954c0a59651ad441";

let input = document.getElementById("fname");
let btn = document.getElementById("execute");
let news = document.getElementById("news");
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let source = e.target.elements.exampleInputEmail1.value;
  // console.log(source);
  parseData(source);
});

function parseData(source) {
  let url = `https://newsapi.org/v2/everything?q=${source}&apiKey=ae0cd2e087b34d55954c0a59651ad441`;
  fetch(url)
    .then((articles) => {
      return articles.json();
    })
    .then((data) => {
      // console.log(data.articles);
      showItem(data.articles);
    })
    .catch((e) => {
      console.log("not Found");
    });
}


function showItem(value) {
  value.forEach((e, i) => {
    let str = `<div class="accordion-item my-2">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${
        i + 1
      }" aria-expanded="true" aria-controls="collapseOne">
        ${e.title}
      </button>
    </h2>
    <div id="collapse${
      i + 1
    }" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body"><strong>${e.content} <a href="${
      e["url"]
    }" target="_blank" >Read more here</a></div>
    </div>
  </div>`;
    news.innerHTML += str;
  });
}
