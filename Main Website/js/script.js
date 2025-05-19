document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle dark mode
    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = 'Toggle Dark Mode';
    darkModeBtn.style.position = 'fixed';
    darkModeBtn.style.top = '10px';
    darkModeBtn.style.right = '10px';
    darkModeBtn.style.zIndex = '1000';
    darkModeBtn.style.backgroundColor = '#4CAF50';  // Green background
    darkModeBtn.style.color = 'white';             // White text
    darkModeBtn.style.padding = '10px 20px';       // Add padding
    darkModeBtn.style.border = 'none';             // Remove border
    darkModeBtn.style.cursor = 'pointer';          // Hand cursor on hover
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Example: Show alert on button click
    const alertBtn = document.createElement('button');
    alertBtn.textContent = 'Say Hello';
    alertBtn.style.position = 'fixed';
    alertBtn.style.top = '50px';
    alertBtn.style.right = '10px';
    alertBtn.style.zIndex = '1000';
    alertBtn.style.backgroundColor = '#008CBA';     // Blue background
    alertBtn.style.color = 'white';                // White text
    alertBtn.style.padding = '10px 20px';          // Add padding
    alertBtn.style.border = 'none';                // Remove border
    alertBtn.style.cursor = 'pointer';             // Hand cursor on hover
    document.body.appendChild(alertBtn);

    alertBtn.addEventListener('click', () => {
        alert('Hello! Welcome to the interactive website.');
    });
});

// Optional: Add dark mode styles if not present
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #222 !important;
        color: #eee !important;
        transition: background 0.3s, color 0.3s;
    }
`;
document.head.appendChild(style);
// Optional: Add CSS for buttons
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `
    button {
        border-radius: 5px; // Rounded corners
        font-size: 16px;    // Larger font size
        transition: background 0.3s, transform 0.2s; // Smooth transitions
    }
    button:hover {
        transform: scale(1.05); // Slightly enlarge on hover
    }
`;
document.head.appendChild(buttonStyle);
// Optional: Add CSS for alert button
const alertButtonStyle = document.createElement('style');
alertButtonStyle.textContent = `
    button {
        background-color: #008CBA; // Blue background
        color: white;              // White text
        padding: 10px 20px;       // Add padding
        border: none;             // Remove border
        cursor: pointer;          // Hand cursor on hover
    }
    button:hover {
        background-color: #005f73; // Darker blue on hover
    }
`;
document.head.appendChild(alertButtonStyle);
// Optional: Add CSS for dark mode button
const darkModeButtonStyle = document.createElement('style');
darkModeButtonStyle.textContent = `
    button {
        background-color: #4CAF50; // Green background
        color: white;              // White text
        padding: 10px 20px;       // Add padding
        border: none;             // Remove border
        cursor: pointer;          // Hand cursor on hover
    }
    button:hover {
        background-color: #45a049; // Darker green on hover
    }
`;
document.head.appendChild(darkModeButtonStyle);
// Optional: Add CSS for alert button
const alertButtonStyle = document.createElement('style');
alertButtonStyle.textContent = `
    button {
        background-color: #008CBA; // Blue background
        color: white;              // White text
        padding: 10px 20px;       // Add padding
        border: none;             // Remove border
        cursor: pointer;          // Hand cursor on hover
    }
    button:hover {
        background-color: #005f73; // Darker blue on hover
    }
`;
document.head.appendChild(alertButtonStyle);