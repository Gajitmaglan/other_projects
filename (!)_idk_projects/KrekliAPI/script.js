const myServiceUrl = "https://epsilon-7b66.restdb.io/rest/chat";
const myApiKey = "615a88f98597142da1745357";
let kreklaNosaukums;

const krekluElements = document.querySelector("#maniKrekli");
const addKreklsElements = document.querySelector("#addKrekls");
const updateElements = document.querySelector("#update");
const deleteElements = document.querySelector("#delete");

const ielādēDatus = () =>
  fetch(myServiceUrl, { headers: { "x-apikey": myApiKey } })
    .then((data) => data.json())
    .then((data) => paradiKreklusUzEkrana(data));

const paradiKreklusUzEkrana = (krekli) => {
  krekluElements.innerHTML = "";
  krekli.forEach((krekls) => {
    const kElements = document.createElement("li");
    kElements.innerText = krekls.name;
    krekluElements.appendChild(kElements);
  });
};

addKreklsElements.addEventListener("click", () => {
  kreklaNosaukums = prompt("kā tevi sauc");
  fetch(myServiceUrl, {
    method: "POST",
    headers: {
      "x-apikey": myApiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: kreklaNosaukums }),
  }).then(() => ielādēDatus());
});

updateElements.addEventListener("click", () => {
  kreklaNosaukums = prompt("kā tevi sauc");
  fetch(myServiceUrl, {
    method: "PUT",
    headers: {
      "x-apikey": myApiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: { name: kreklaNosaukums } }),
  }).then(() => ielādēDatus());
});

//  deleteElements.addEventListener('click', (() => {
//   kreklaNosaukums = prompt('kā tevi sauc');
//     fetch(myServiceUrl, {
//         method: 'DELETE',
//         headers: {
//           'x-apikey': myApiKey,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: kreklaNosaukums })
//     })
//        .then(()=>ielādēDatus())
//  }))

deleteElements.addEventListener("click", () => {
  kreklaNosaukums = prompt("kā tevi sauc");
  fetch(myServiceUrl, {
    method: "delete",
  }).then(() => ielādēDatus());
});

ielādēDatus();
