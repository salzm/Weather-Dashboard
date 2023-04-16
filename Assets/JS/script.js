const cities = ["Atlanta", "Texas", "New York", "Chicago"]; // This will be an api and when fetch will store in Array
let input;
function search_cities() {
  input = document.getElementById("searchCities").value;
  console.log(input);
}
// document.getElementById("submit").addEventListener("click", submit);
// document.getElementById("home").addEventListener("click", home);
function handleSubmit() {
  if (cities.includes(input, 0)) {
    // window.location.href="error.html";
    alert("Found");
  } else {
    window.location.href = "error.html";
  }
}
function redrirectHome() {
  window.location.href = "index.html";
}
