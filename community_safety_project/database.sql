-- =========================================
-- COMMUNITY SAFETY PORTAL DATABASE
-- =========================================

-- Remove old database if it exists
DROP DATABASE IF EXISTS community_safety;

-- Create new database
CREATE DATABASE community_safety
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE community_safety;

-- =========================================
-- USERS TABLE
-- =========================================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- INCIDENT REPORTS TABLE
-- =========================================
CREATE TABLE reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    location VARCHAR(150) NOT NULL,
    emergency_type ENUM(
        'fire',
        'theft',
        'suspicious',
        'medical'
    ) NOT NULL,
    description TEXT NOT NULL,
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_reports_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

-- =========================================
-- OPTIONAL: ADMIN TABLE (Future Use)
-- =========================================
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
