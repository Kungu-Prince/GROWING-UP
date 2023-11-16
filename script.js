// Function to guess the age
function guessMyAge() {
    const correctAge = 21; // Change this to your actual age

    for (let i = 0; i < 3; i++) {
        // Prompt the user for their guess
        let userGuess = parseInt(prompt("Can you guess my age?"));

        // Check if the guess is correct
        if (userGuess === correctAge) {
            alert("😊👍You know me!");
            return; // Exit the function if the guess is correct
        } else {
            alert("Try again!");
        }
    }

    // If all trials are exhausted
    alert("😒You wish you knew me!");
}

// Attach the function to a button click event
document.addEventListener('DOMContentLoaded', function() {
    const startGameButton = document.getElementById('startGameButton');
    startGameButton.addEventListener('click', guessMyAge);
});

document.addEventListener('DOMContentLoaded', function() {
    const addRowBtn = document.getElementById('addRowBtn');
    const contactTable = document.getElementById('contactTable');
    const contactForm = document.getElementById('contactForm');

    // Event listener for the "Add Contact" button
    addRowBtn.addEventListener('click', function() {
        addContactRow();
    });

    // Event listener for the form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Add a new row to the table with the form values
        addTableRow(name, email, phone);

        // Clear the form inputs
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    });

    // Function to add a new row to the table
    function addTableRow(name, email, phone) {
        const newRow = contactTable.insertRow(-1); // Insert a new row at the end

        // Insert cells into the new row
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const phoneCell = newRow.insertCell(2);

        // Set the cell values
        nameCell.innerHTML = name;
        emailCell.innerHTML = email;
        phoneCell.innerHTML = phone;
    }

    // Function to add a new row to the table when the "Add Contact" button is clicked
    function addContactRow() {
        const emptyRow = contactTable.insertRow(-1); // Insert a new row at the end

        // Insert empty cells into the new row
        for (let i = 0; i < 3; i++) {
            emptyRow.insertCell(i).innerHTML = '';
        }
    }
});

