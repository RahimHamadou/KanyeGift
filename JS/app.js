const btn = document.querySelector(".refresh");
const citation = document.querySelector(".citation");
let quote = document.createElement("h2");

btn.addEventListener("click", function () {
	fetch("https://api.kanye.rest").then((response) =>
		response
			.json()

			.then((data) => (quote.textContent = data.quote))
			// .then(console.log(quote))
			.then((citation.innerHTML = quote.textContent)),
	);
});
