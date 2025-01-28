// Open Modal for a specific project
function openProjectModal(projectId) {
    const projectButtons = document.querySelectorAll('.project-btn');
    const modal = document.getElementById('project-modal');

    // Find and open the corresponding project modal
    document.getElementById('modal-title').innerText = projectId;
    document.getElementById('modal-text').innerText = 'Detailed description of ' + projectId + ' project goes here.';

    // Show the modal
    modal.style.display = 'flex';
}

// Close Modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Handle Slide Movement
function moveSlide(direction) {
    const carousel = document.querySelector('.projects-scroll');
    carousel.scrollBy({
        left: direction * 220, // Scroll by button width + gap
        behavior: 'smooth',
    });
}