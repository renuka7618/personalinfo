// Dark Mode Toggle Function
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    alert(`Switched to ${currentMode} Mode!`);
};

// Scroll Animation for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Profile Picture Hover Animation
const profilePic = document.querySelector('.profile-pic');
profilePic.addEventListener('mouseover', () => {
    profilePic.style.transform = 'scale(1.1)';
    profilePic.style.transition = 'transform 0.3s ease';
});

profilePic.addEventListener('mouseout', () => {
    profilePic.style.transform = 'scale(1)';
});

// Optional: Dark Mode CSS Added Dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Button to toggle dark mode
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '20px';
    darkModeButton.style.right = '20px';
    darkModeButton.style.padding = '10px';
    darkModeButton.style.backgroundColor = '#333';
    darkModeButton.style.color = 'white';
    darkModeButton.style.border = 'none';
    darkModeButton.style.cursor = 'pointer';
    darkModeButton.style.fontSize = '16px';
    
    darkModeButton.addEventListener('click', toggleDarkMode);
    document.body.appendChild(darkModeButton);
});
