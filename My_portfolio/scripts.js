
function addHoverEffect() {
    const projectsSection = document.getElementById('projects');

    projectsSection.addEventListener('mouseenter', function () {
        projectsSection.style.backgroundColor = getRandomColor();
    });

    projectsSection.addEventListener('mouseleave', function () {
        projectsSection.style.backgroundColor = ''; 
    });
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


addHoverEffect();





