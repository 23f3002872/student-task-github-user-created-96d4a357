// Function to repopulate the form on load
window.onload = function() {
    const seed = 'your_seed_value'; // Replace with the actual seed value
    const cachedUser = localStorage.getItem(`github-user-${seed}`);
    
    if (cachedUser) {
        const userData = JSON.parse(cachedUser);
        document.querySelector('#username').value = userData.username || '';
        // Populate other form fields as necessary
    }
};

// Function to save the form data to localStorage on successful lookup
function saveUserToCache(userData) {
    const seed = 'your_seed_value'; // Replace with the actual seed value
    localStorage.setItem(`github-user-${seed}`, JSON.stringify(userData));
}

// Example of how to call saveUserToCache after a successful lookup
// saveUserToCache({ username: 'exampleUser' });