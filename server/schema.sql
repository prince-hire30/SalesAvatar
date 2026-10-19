-- Bharat Group Sales Avatar CRM Database Schema (MySQL 8.0+)
CREATE DATABASE IF NOT EXISTS sales_avatar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sales_avatar;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  phone VARCHAR(30) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  role VARCHAR(50) DEFAULT 'General',
  department VARCHAR(100) DEFAULT 'Sales Ops Automation',
  joined_date VARCHAR(50) DEFAULT '07 Sept 2026',
  avatar_url VARCHAR(255),
  punched_in BOOLEAN DEFAULT TRUE,
  punched_in_at VARCHAR(50) DEFAULT '9:23 AM',
  monthly_rate DECIMAL(5,2) DEFAULT 96.4,
  rank_floor VARCHAR(50) DEFAULT 'Rank #4 Floor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contact_name VARCHAR(120) NOT NULL,
  contact_phone VARCHAR(50) NOT NULL,
  company VARCHAR(150) NOT NULL,
  deal_value BIGINT NOT NULL,
  pipeline_stage VARCHAR(50) NOT NULL,
  assigned_rep VARCHAR(100) NOT NULL,
  next_action VARCHAR(255) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Attendance Records
CREATE TABLE IF NOT EXISTS attendance_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  record_date DATE NOT NULL,
  status ENUM('Present', 'Late', 'Half day', 'Absent', 'On leave', 'Holiday') DEFAULT 'Present',
  check_in VARCHAR(20),
  check_out VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Leave Applications
CREATE TABLE IF NOT EXISTS leave_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  leave_type VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  days INT NOT NULL,
  reason TEXT NOT NULL,
  status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Holidays
CREATE TABLE IF NOT EXISTS holidays (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  holiday_date DATE NOT NULL,
  days_until INT NOT NULL,
  badge_type VARCHAR(50) DEFAULT 'Festive'
);

-- Recognition Laureates
CREATE TABLE IF NOT EXISTS recognition_laureates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  month_year VARCHAR(50) NOT NULL,
  category ENUM('Winner of the Month', 'Revenue Catcher') DEFAULT 'Winner of the Month',
  employee_name VARCHAR(100) NOT NULL,
  employee_role VARCHAR(120) NOT NULL,
  employee_avatar VARCHAR(255),
  award_title VARCHAR(100) NOT NULL,
  quote TEXT,
  likes INT DEFAULT 15,
  celebrates INT DEFAULT 2,
  loves INT DEFAULT 10,
  insights INT DEFAULT 1,
  fires INT DEFAULT 4,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Recognition Comments
CREATE TABLE IF NOT EXISTS recognition_comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  laureate_id INT,
  author_name VARCHAR(100) NOT NULL,
  author_badge VARCHAR(50) DEFAULT 'Team Member',
  author_avatar VARCHAR(255),
  comment_text TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at VARCHAR(50) DEFAULT 'Just now',
  FOREIGN KEY (laureate_id) REFERENCES recognition_laureates(id) ON DELETE CASCADE
);

-- Tickets table
CREATE TABLE IF NOT EXISTS tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticket_number VARCHAR(30) UNIQUE NOT NULL,
  subject VARCHAR(200) NOT NULL,
  category VARCHAR(80) NOT NULL,
  priority ENUM('Low', 'Medium', 'High', 'Urgent') DEFAULT 'Medium',
  status ENUM('Open', 'In Progress', 'Waiting on You', 'Resolved') DEFAULT 'Open',
  description TEXT NOT NULL,
  created_by VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chat Messages
CREATE TABLE IF NOT EXISTS chat_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  channel VARCHAR(100) NOT NULL,
  sender_name VARCHAR(100) NOT NULL,
  sender_avatar VARCHAR(255),
  message TEXT NOT NULL,
  timestamp VARCHAR(50) NOT NULL
);

-- Storage Files
CREATE TABLE IF NOT EXISTS storage_files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  category VARCHAR(80) NOT NULL,
  size VARCHAR(50) NOT NULL,
  uploaded_by VARCHAR(100) NOT NULL,
  uploaded_at VARCHAR(50) NOT NULL
);
