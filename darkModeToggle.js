// This function toggles between light and dark mode using Tailwind CSS classes
function toggleDarkMode() {
    const body = document.querySelector('body');

    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');

    // Save the user's preference in localStorage
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check if the user has a preference for dark mode and apply it
function applySavedDarkModePreference() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (isDarkMode) {
        document.querySelector('body').classList.add('dark');
    }
}

// Apply the saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', applySavedDarkModePreference);
