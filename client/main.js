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
    body: JSON.stringify({ userData }),
  });
});
