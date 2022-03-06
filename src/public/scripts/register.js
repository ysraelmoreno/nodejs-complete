const nameElement = document.querySelector("#name");

document.addEventListener("DOMContentLoaded", () => {
  nameElement.innerHTML = new URLSearchParams(window.location.search).get(
    "name"
  );
});
