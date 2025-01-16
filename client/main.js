// For now we don't have the data from the server and database to do any of this but I don't want to fall behind schedule while we're waiting for that so I'm writing the js that should come after that

const locationForm = document.getElementById("flexfare");
console.log(locationForm);
locationForm.addEventListener("submit", (event) => {
  console.log("Something");
  event.preventDefault();
  const formData = new FormData(locationForm);
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  fetch("http://localhost:8080/retrieve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
  const calculateText = document.createElement("h1");
  calculateText.textContent = "Calculating distance...";
  document.body.appendChild(calculateText);
  setTimeout(() => {
    calculateText.style.display = "none";
    renderRecPrice();
  }, 2000);
  //Make text appear that says "Calculating Price..." for a few seconds then fetch the data from the database (via the server) and have a new form appear with an <input type="number" name="actual_price" id="actual_price input" value=`objectFetchedFromSelectQuery.rec_price`/>
});

const priceDiv = document.getElementById("price-div");
async function renderRecPrice() {
  const result = await fetch("http://localhost:8080/retrieve");
  const jsonResult = await result.json();
  console.log(jsonResult);
  const rec_price = document.createElement("form");
  rec_price.type = "number";
  rec_price.name = "actual_price";
  rec_price.id = "actual_price input";
  rec_price.value = jsonResult.rec_price;
}

//In the server.js we need to make the query `SELECT rec_price FROM routes WHERE pickup = $1 AND dropoff = $2`, [req.body.formObject.pickup, req.body.formObject.dropoff]
