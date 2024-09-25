document.addEventListener("DOMContentLoaded", function() {
    const contributorsContainer = document.getElementById('contributors-container');
  
    fetch('contributors.json')
      .then(response => response.json())
      .then(contributors => {
        contributors.forEach(contributor => {
          const contributorCard = document.createElement('div');
          contributorCard.classList.add('contributor-card');
  
          contributorCard.innerHTML = `
            <h2>${contributor.name}</h2>
            <p><strong>Role:</strong> ${contributor.role}</p>
            <p><strong>Email:</strong> <a href="mailto:${contributor.email}">${contributor.email}</a></p>
          `;
  
          contributorsContainer.appendChild(contributorCard);
        });
      })
      .catch(error => {
        console.error('Error loading contributors:', error);
      });
  });
  