// For now we don't have the data from the server and database to do any of this but I don't want to fall behind schedule while we're waiting for that so I'm writing the js that should come after that

const locationForm = document.getElementById("formID");
locationForm.addEventListener("submit", (event) => {
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
  //Make text appear that says "Calculating Price..." for a few seconds then fetch the data from the database (via the server) and have a new form appear with an <input type="number" name="actual_price" id="actual_price input" value=`objectFetchedFromSelectQuery.rec_price`/>
});

//In the server.js we need to make the query `SELECT rec_price FROM routes WHERE pickup = $1 AND dropoff = $2`, [req.body.formObject.pickup, req.body.formObject.dropoff]
