/* ============================================
   PORTFOLIO JAVASCRIPT - Filtering & Lightbox
   ============================================ */

let projectsData = [];

// Load Projects from JSON
const loadProjects = async () => {
    try {
        const response = await fetch('assets/data/projects.json');
        projectsData = await response.json();
        renderProjects(projectsData);
        setupFilterButtons();
    } catch (error) {
        console.error('Error loading projects:', error);
    }
};

// Render Projects
const renderProjects = (projects) => {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${delay}s`;
        card.dataset.category = project.category;

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="project-link">Demo</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="project-link">GitHub</a>` : ''}
                </div>
            </div>
        `;

        // Add lightbox functionality to image
        card.querySelector('.project-image').addEventListener('click', () => {
            openLightbox(project.image, project.title);
        });

        projectsGrid.appendChild(card);
    });
};

// Setup Filter Buttons
const setupFilterButtons = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const category = btn.dataset.filter;
            const filtered = category === 'all' 
                ? projectsData 
                : projectsData.filter(p => p.category === category);

            renderProjects(filtered);
        });
    });
};

// Lightbox Functions
const openLightbox = (imageSrc, altText) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = altText;
        lightbox.classList.add('active');
    }
};

const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
};

// Lightbox Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Load projects
    loadProjects();
});

console.log('Portfolio JavaScript loaded successfully!');
