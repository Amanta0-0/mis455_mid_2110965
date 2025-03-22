// Function to show an alert when the "Learn More" button is clicked
function showAlert() {
    alert("Welcome to our online store! Browse our amazing products.");
}
function openCart() {
    alert("Your cart is currently empty!");
}

// Function to simulate adding an item to the cart
function addToCart() {
    alert("Item added to cart!");
}

// Function to handle the contact form submission
function submitForm(event) {
    event.preventDefault(); // Prevent page refresh
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Thank you, ${name}! We have received your message.`);
        document.querySelector("form").reset();
    }
}