<?php
// Step 1: Connect to MySQL
$servername = "localhost";
$username = "root";
$password = "";
$database = "testdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Step 2: Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 3: Fetch data from 'users' table
$sql = "SELECT id, name, password FROM users";
$result = $conn->query($sql);

// Step 4: Display data
if ($result->num_rows > 0) {
    echo "<h2>Users List:</h2>";
    echo "<table border='1' cellpadding='5'>";
    echo "<tr><th>ID</th><th>Name</th><th>Password</th></tr>";

    // Output each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
		echo "<td>". $row["id"] ."</td>";
        echo "<td>". $row["name"] ."</td>";
        echo "<td>". $row["password"] ."</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No users found.";
}

// Step 5: Close connection
$conn->close();
?>
