// This file contains JavaScript functionality for the landing page of the Menuzinho application.

// Function to handle form validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Function to toggle the community section
function toggleCommunity() {
    const communitySection = document.getElementById('community');
    communitySection.style.display = communitySection.style.display === 'none' ? 'block' : 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    const communityButton = document.getElementById('toggleCommunityButton');
    communityButton.addEventListener('click', toggleCommunity);
});