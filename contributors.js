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
            <p><strong>School:</strong> ${contributor.school}</p>
            <p><strong>Email:</strong> <a href="mailto:${contributor.email}">${contributor.email}</a></p>
            <div class="card-footer">
              <a href="mailto:${contributor.email}">
                <i class="icon">✉</i>
              </a>
            </div>
          `;
  
          contributorsContainer.appendChild(contributorCard);
        });
      })
      .catch(error => {
        console.error('Error loading contributors:', error);
      });
  });
  