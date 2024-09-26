document.addEventListener("DOMContentLoaded", function() {
  const contributorsContainer = document.getElementById('contributors-container');

  fetch('contributors.json')
    .then(response => response.json())
    .then(contributors => {
      contributors.forEach(contributor => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${contributor.name}</td>
          <td>${contributor.status}</td>
          <td><a href="mailto:${contributor.email}">${contributor.email}</a></td>
        `;

        contributorsContainer.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading contributors:', error);
    });
});
