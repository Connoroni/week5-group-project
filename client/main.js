const priceDiv = document.getElementById("price-div");
priceDiv.style.display = "none";
const driverDiv = document.getElementById("driver-div");
driverDiv.style.display = "none";

const locationForm = document.getElementById("flexfare");
// console.log(locationForm);
locationForm.addEventListener("submit", async (event) => {
  //   console.log("Something");
  event.preventDefault();
  const formData = new FormData(locationForm);
  const formObject = Object.fromEntries(formData);
  console.log("FORM OBJECT:", formObject);
  const result = await fetch(
    "https://week5-group-project-server.onrender.com/retrieve",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    }
  );
  const jsonResult = await result.json();
  console.log("JSON RESULT:", jsonResult[0]);
  const calculateText = document.createElement("h1");
  calculateText.textContent = "Calculating distance...";
  document.body.appendChild(calculateText);
  setTimeout(() => {
    calculateText.style.display = "none";
    renderPrice();
  }, 2000);
});

function renderPrice() {
  priceDiv.style.display = "flex";
  priceDiv.innerHTML = `<form id="priceForm"
  <label>Enter your offer here: £</label>
  <input type="number" name="actual_price" id="actual_price_input" value="50" placeholder="Enter your offer here"/> <button type="submit">Send offer</button> 
  </form>`;
  const priceForm = document.getElementById("priceForm");
  priceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    driverDiv.style.display = "flex";
    driverDiv.innerHTML = `
    <h2>3 Drivers Available</h2>
    <div class="driver">
      <p class="driver-name">Driver 1</p>
      <p class="driver-status">Pending</p>
    </div>
    <div class="driver">
      <p class="driver-name">Driver 2</p>
      <p class="driver-status">Rejected</p>
    </div>
    <div class="driver">
      <p class="driver-name">Driver 1</p>
      <p class="driver-status">Accepted offer</p>
    </div>`;
  });
}
