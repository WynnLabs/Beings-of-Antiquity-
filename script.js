document.addEventListener('DOMContentLoaded', () => {
    const entityGrid = document.getElementById('entityGrid');

    fetch('entities.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            displayEntities(data);
        })
        .catch(error => {
            console.error('Error loading entities:', error);
            entityGrid.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });

    function displayEntities(entities) {
        entityGrid.innerHTML = '';
        entities.forEach(entity => {
            const card = document.createElement('div');
            card.className = 'entity-card';
            card.innerHTML = `
                <h2>${entity.name}</h2>
                <img src="${entity.image_url}" alt="${entity.name}" style="display: ${entity.image_url ? 'block' : 'none'};">
                <p><strong>Category:</strong> ${entity.category}</p>
                <p><strong>Origin:</strong> ${entity.origin}</p>
                <p><strong>Characteristics:</strong> ${entity.physical_characteristics}</p>
                <p><strong>Diet:</strong> ${entity.diet}</p>
                <p><strong>Strengths:</strong> ${entity.strengths}</p>
                <p><strong>Weaknesses:</strong> ${entity.weaknesses}</p>
                <p><strong>Family Tree:</strong> ${entity.family_tree}</p>
                <p><strong>Fate:</strong> ${entity.fate}</p>
                <p><strong>Tidbits:</strong> ${entity.tidbits}</p>
            `;
            entityGrid.appendChild(card);
        });
    }
});
