const input = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  const data = await fetch("/register", {
    method: "POST",
    body: JSON.stringify({
      name: input.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const dataFormatted = await data.json();

  window.location.href = `/register?name=${dataFormatted.name}`;
});
