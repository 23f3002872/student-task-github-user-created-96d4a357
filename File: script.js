document.addEventListener("DOMContentLoaded", function() {
    const seed = "your_seed_value"; // Replace with actual seed value
    const cachedUser = localStorage.getItem(`github-user-${seed}`);

    if (cachedUser) {
        const userData = JSON.parse(cachedUser);
        document.querySelector("#username").value = userData.username; // Assuming there's an input with id 'username'
        document.querySelector("#email").value = userData.email; // Assuming there's an input with id 'email'
    }

    document.querySelector("#lookupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;

        // Perform the lookup logic here...

        // On successful lookup
        const userData = { username, email };
        localStorage.setItem(`github-user-${seed}`, JSON.stringify(userData));
    });
});