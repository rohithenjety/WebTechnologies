<?php
// Handle user registration form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Add your code to insert the user into the database
    // Remember to hash the password before storing it
}
?>


<!-- <?php
// Handle profile update form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $bio = $_POST['bio'];
    
    // Process profile picture upload if needed
    
    // Update user profile information in the database
}
?> -->
