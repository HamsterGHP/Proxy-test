document.getElementById("proxyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const url = document.getElementById("url").value;

    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not OK");
            return response.json();
        })
        .then(data => {
            document.getElementById("output").innerText = data.contents;
        })
        .catch(error => {
            document.getElementById("output").innerText = "Failed to fetch content.";
            console.error("Error:", error);
        });
});
