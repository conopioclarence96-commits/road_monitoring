-- Road Monitoring System Database
-- Created for admin functionality

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS road_monitoring;
USE road_monitoring;

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role ENUM('super_admin', 'admin', 'moderator') DEFAULT 'admin',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Road incidents table
CREATE TABLE IF NOT EXISTS road_incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    incident_type ENUM('accident', 'construction', 'closure', 'maintenance', 'other') NOT NULL,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    status ENUM('active', 'resolved', 'investigating', 'monitoring') DEFAULT 'active',
    reported_by VARCHAR(100),
    contact_info VARCHAR(100),
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    admin_id INT,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Traffic monitoring data
CREATE TABLE IF NOT EXISTS traffic_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    vehicle_count INT DEFAULT 0,
    average_speed DECIMAL(5, 2),
    congestion_level ENUM('low', 'medium', 'high', 'severe') DEFAULT 'low',
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    admin_id INT,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE SET NULL
);

-- System logs table
CREATE TABLE IF NOT EXISTS system_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT,
    action VARCHAR(100) NOT NULL,
    table_name VARCHAR(50),
    record_id INT,
    details TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE SET NULL
);

-- Road infrastructure table
CREATE TABLE IF NOT EXISTS road_infrastructure (
    id INT AUTO_INCREMENT PRIMARY KEY,
    road_name VARCHAR(200) NOT NULL,
    road_type ENUM('highway', 'arterial', 'collector', 'local', 'bridge', 'tunnel') NOT NULL,
    length_km DECIMAL(8, 2),
    condition_rating ENUM('excellent', 'good', 'fair', 'poor', 'critical') DEFAULT 'good',
    last_inspection DATE,
    next_maintenance DATE,
    maintenance_notes TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    status ENUM('active', 'under_maintenance', 'closed') DEFAULT 'active',
    admin_id INT,
    FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (username, email, password_hash, full_name, role) 
VALUES ('admin', 'admin@roadmonitoring.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'System Administrator', 'super_admin')
ON DUPLICATE KEY UPDATE username = username;

-- Create indexes for better performance
CREATE INDEX idx_incidents_location ON road_incidents(location);
CREATE INDEX idx_incidents_status ON road_incidents(status);
CREATE INDEX idx_incidents_created_at ON road_incidents(created_at);
CREATE INDEX idx_traffic_location ON traffic_data(location);
CREATE INDEX idx_traffic_recorded_at ON traffic_data(recorded_at);
CREATE INDEX idx_logs_admin_id ON system_logs(admin_id);
CREATE INDEX idx_logs_created_at ON system_logs(created_at);
CREATE INDEX idx_infrastructure_type ON road_infrastructure(road_type);
CREATE INDEX idx_infrastructure_status ON road_infrastructure(status);
