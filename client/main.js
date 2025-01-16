const priceDiv = document.getElementById("price-div");
const driverDiv = document.getElementById("driver-div");

const locationForm = document.getElementById("flexfare");
// console.log(locationForm);
locationForm.addEventListener("submit", async (event) => {
  //   console.log("Something");
  event.preventDefault();
  const formData = new FormData(locationForm);
  const formObject = Object.fromEntries(formData);
  console.log("FORM OBJECT:", formObject);
  const result = await fetch("http://localhost:8080/retrieve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
  const jsonResult = await result.json();
  console.log("JSON RESULT:", jsonResult[0]);
  const calculateText = document.createElement("h1");
  calculateText.textContent = "Calculating distance...";
  document.body.appendChild(calculateText);
  setTimeout(() => {
    calculateText.style.display = "none";
    priceDiv.innerHTML = `<form 
    <label>Enter your offer here: £</label>
    <input type="number" name="actual_price" id="actual_price_input" value="1000000000" placeholder="Enter your offer here"/> <button type="submit">Send offer</button> 
    </form>`;
    // const rec_price = document.createElement("form");
    // rec_price.type = "number";
    // rec_price.name = "actual_price";
    // rec_price.id = "actual_price_input";
    // rec_price.value = "5";
    // priceDiv.appendChild(rec_price);
  }, 2000);
});
