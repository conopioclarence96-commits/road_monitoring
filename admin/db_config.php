<?php
// Database configuration for Road Monitoring System
class Database {
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'road_monitoring';
    private $conn;

    public function __construct() {
        $this->connect();
    }

    private function connect() {
        try {
            $this->conn = new mysqli(
                $this->host, 
                $this->username, 
                $this->password, 
                $this->database
            );

            if ($this->conn->connect_error) {
                throw new Exception("Connection failed: " . $this->conn->connect_error);
            }

            // Set charset to utf8mb4
            $this->conn->set_charset("utf8mb4");
            
        } catch (Exception $e) {
            die("Database connection error: " . $e->getMessage());
        }
    }

    public function getConnection() {
        return $this->conn;
    }

    public function query($sql) {
        return $this->conn->query($sql);
    }

    public function prepare($sql) {
        return $this->conn->prepare($sql);
    }

    public function escape($string) {
        return $this->conn->real_escape_string($string);
    }

    public function getLastInsertId() {
        return $this->conn->insert_id;
    }

    public function close() {
        if ($this->conn) {
            $this->conn->close();
        }
    }

    public function __destruct() {
        $this->close();
    }
}

// Create database connection function
function getDBConnection() {
    return new Database();
}
?>
