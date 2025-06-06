<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "testdb";

// Connect to database
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from form
$user = $_POST['username'];
$pass = $_POST['password'];

// Insert into table
$sql = "INSERT INTO users (name, password) VALUES ('$user', '$pass')";
if ($conn->query($sql) === TRUE) {
  echo "Login info saved!";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>
