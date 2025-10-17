document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#github-user-12345");
    const createdAtDiv = document.querySelector("#github-created-at");

    // Validate form element
    if (form.tagName !== "FORM") {
        console.error("Form element not found!");
        return;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.querySelector("#username").value;
        const token = document.querySelector("#token").value;
        const url = `https://api.github.com/users/${username}${token ? `?token=${token}` : ''}`;

        try {
            const response = await fetch(url);

            // Check if the response is ok
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            const createdAt = new Date(data.created_at).toISOString().split('T')[0]; // Format date to YYYY-MM-DD

            // Display the account creation date
            createdAtDiv.textContent = `Account Created At: ${createdAt} UTC`;

            // Validate the output
            if (!createdAtDiv.textContent.includes("20")) {
                console.error("Date format is incorrect!");
            }
        } catch (error) {
            createdAtDiv.textContent = "Error fetching user data. Please check the username and token.";
            console.error(error);
        }
    });
});

### Explanation of Key Functionality:
1. **HTML Structure**: The HTML file includes a form with an ID that follows the specified format. It contains input fields for the GitHub username and an optional token.
2. **Bootstrap Integration**: The Bootstrap CSS is linked for styling, ensuring the application is responsive and visually appealing.
3. **JavaScript Functionality**: The JavaScript file handles form submission, fetches data from the GitHub API, and displays the account creation date. It includes error handling for network issues and invalid responses.
4. **Accessibility**: Labels are associated with their respective input fields for better accessibility.
5. **Responsive Design**: The Bootstrap framework ensures that the layout is responsive across different devices.

This project is ready to be deployed and tested. Make sure to replace the `token` with a valid GitHub token if needed for private repositories.