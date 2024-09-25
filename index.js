document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON file with contributors' data
    fetch('contributors.json')
        .then(response => response.json())
        .then(data => {
            const contributorsContainer = document.getElementById('contributors-list');
            
            // Loop through each contributor and create HTML to display it
            data.forEach(contributor => {
                const contributorDiv = document.createElement('div');
                contributorDiv.classList.add('contributor-card'); // CSS class for styling

                contributorDiv.innerHTML = `
                    <h2>${contributor.name}</h2>
                    <p><strong>Role:</strong> ${contributor.role}</p>
                    <p><strong>Email:</strong> <a href="mailto:${contributor.email}">${contributor.email}</a></p>
                `;

                contributorsContainer.appendChild(contributorDiv);
            });
        })
        .catch(error => {
            console.error('Error loading contributors:', error);
        });
});

// Function to go back to the main website
function goBack() {
    window.location.href = "https://aminemahdane.com/";
}
