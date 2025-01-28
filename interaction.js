// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Modal functionality
const projectBtns = document.querySelectorAll('.project-btn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalContent = document.querySelector('.modal-content');

projectBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        const projectInfo = getProjectInfo(index);
        displayModal(projectInfo);
    });
});

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

function getProjectInfo(index) {
    // You can modify this to return real project info, images, and links
    const projectDetails = [
        {
            title: 'Project 1',
            description: 'Description of Project 1. This could be about a web app, software, or other project.',
            image: 'images/projects/project1.jpg',
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2. Showcasing a different project or initiative.',
            image: 'images/projects/project2.jpg',
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3. Another project you want to showcase.',
            image: 'images/projects/project3.jpg',
        }
    ];

    return projectDetails[index];
}

function displayModal(projectInfo) {
    const modalLeft = modalContent.querySelector('.modal-left');
    const modalRight = modalContent.querySelector('.modal-right');
    
    modal.style.display = 'flex';
    
    modalLeft.innerHTML = `<img src="${projectInfo.image}" alt="${projectInfo.title}">`;
    modalRight.innerHTML = `<h2>${projectInfo.title}</h2><p>${projectInfo.description}</p>`;
}

// Section Scroll Handling
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Functionality for nav bar background color change on scroll
const nav = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#222'; // Darken the nav on scroll
    } else {
        nav.style.backgroundColor = '#000'; // Original black color
    }
});

// Animations for active sections (Fade-in on scroll)
const activeSections = document.querySelectorAll('section');

activeSections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight > sectionTop + sectionHeight / 2) {
            section.classList.add('fade-in');
        }
    });
});

// Modal close functionality (Click outside the modal)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});