const btn = document.querySelector("#btn");
const input = document.querySelector("#name");
const namePlace = document.querySelector("#name_place");

console.log(btn);

btn.addEventListener("click", () => {
  console.log("sending request...");
  const options = {
    method: "POST",
    body: new URLSearchParams({ name: input.value }),
  };

  fetch("http://localhost:5000/name", options)
    .then((res) => res.json())
    .then((data) => JSON.parse(data))
    .then((finalData) => {
      console.log(finalData.name);
      namePlace.innerHTML = finalData.name;
    })
    .catch((err) => alert(err));
});
