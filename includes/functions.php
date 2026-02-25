<?php
// Security and utility functions

// Sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Generate CSRF token
function generate_csrf_token() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token
function verify_csrf_token($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Check if user is logged in
function is_logged_in() {
    return isset($_SESSION['user_id']) && isset($_SESSION['logged_in']);
}

// Redirect if not logged in
function require_login() {
    if (!is_logged_in()) {
        header('Location: ../pages/login.php');
        exit();
    }
}

// Check user role
function has_role($required_role) {
    return isset($_SESSION['role']) && $_SESSION['role'] === $required_role;
}

// Require specific role
function require_role($required_role) {
    require_login();
    if (!has_role($required_role)) {
        header('HTTP/1.0 403 Forbidden');
        exit('Access denied');
    }
}

// Format date
function format_date($date) {
    return date('F j, Y', strtotime($date));
}

// Generate random string
function generate_random_string($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

// Send email (basic implementation)
function send_email($to, $subject, $message) {
    $headers = "From: noreply@quezon.gov\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    return mail($to, $subject, $message, $headers);
}
?>
