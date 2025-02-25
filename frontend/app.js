async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data', { cache: "no-cache" });
        const data = await response.json();

        const responseContainer = document.getElementById('response');
        responseContainer.innerHTML = `<p>${data.message}</p>`;

        let existingLink = document.getElementById("rickroll-link");
        if (existingLink) {
            existingLink.remove();
        }

        if (data.rickroll) {
            let link = document.createElement("a");
            link.id = "rickroll-link";
            link.href = data.rickroll;
            link.innerText = "Click here for a surprise!";
            link.target = "_blank";

            responseContainer.appendChild(document.createElement("br"));
            responseContainer.appendChild(link);
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
