<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $location = $_POST['location'];

  // Process location data (e.g., store in session, database, etc.)

  echo 'Location updated successfully!';
} else {
  echo 'Error: Form submission method not allowed.';
}
?>
