<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'rgmapinfragov_roadmon');
define('DB_PASS', 'RoadMonitoring@2024');
define('DB_NAME', 'rgmapinfragov_roadmonitoring');

// Create database connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset
$conn->set_charset("utf8mb4");
?>
