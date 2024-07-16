CREATE DATABASE airline;
use airline;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    role ENUM('admin', 'customer', 'staff') NOT NULL
);

CREATE TABLE flights (
    flight_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_number VARCHAR(10) NOT NULL,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    departure_time DATETIME NOT NULL,
    arrival_time DATETIME NOT NULL,
    status ENUM('scheduled', 'delayed', 'cancelled', 'departed', 'arrived') NOT NULL
);

CREATE TABLE aircraft (
    aircraft_id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(50) NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    flight_id INT,
    booking_date DATETIME NOT NULL,
    status ENUM('confirmed', 'cancelled', 'pending') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE tickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    seat_number VARCHAR(10) NOT NULL,
    class ENUM('economy', 'business', 'first') NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);

CREATE TABLE check_ins (
    check_in_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    check_in_time DATETIME NOT NULL,
    baggage_count INT NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);

CREATE TABLE flight_status (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_id INT,
    status_time DATETIME NOT NULL,
    status ENUM('on_time', 'delayed', 'cancelled', 'departed', 'arrived') NOT NULL,
    FOREIGN KEY (flight_id) REFERENCES flights(flight_id)
);

INSERT INTO aircraft (model, manufacturer, capacity) VALUES
('Boeing 737', 'Boeing', 189),
('Airbus A320', 'Airbus', 180),
('Boeing 777', 'Boeing', 396),
('Airbus A380', 'Airbus', 853),
('Boeing 787', 'Boeing', 242),
('Embraer E175', 'Embraer', 88),
('Bombardier CRJ900', 'Bombardier', 90),
('Airbus A350', 'Airbus', 440),
('Boeing 747', 'Boeing', 660),
('Airbus A220', 'Airbus', 130);


-- Insert users
INSERT INTO users (username, password, email, first_name, last_name, date_of_birth, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', '1985-05-15', 'customer'),
('jane_smith', 'password123', 'jane.smith@example.com', 'Jane', 'Smith', '1990-07-20', 'admin'),
('alice_brown', 'password123', 'alice.brown@example.com', 'Alice', 'Brown', '1992-10-05', 'staff');

-- Insert flights
INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES
('AI101', 'New York', 'London', '2024-07-10 14:00:00', '2024-07-10 22:00:00', 'scheduled'),
('BA202', 'Los Angeles', 'Tokyo', '2024-07-11 16:00:00', '2024-07-12 08:00:00', 'scheduled');

-- Insert aircraft
INSERT INTO aircraft (model, manufacturer, capacity) VALUES
('Boeing 747', 'Boeing', 416),
('Airbus A380', 'Airbus', 555);

-- Insert bookings
INSERT INTO bookings (user_id, flight_id, booking_date, status) VALUES
(1, 1, '2024-06-15 10:00:00', 'confirmed'),
(2, 2, '2024-06-16 11:00:00', 'pending');

-- Insert tickets
INSERT INTO tickets (booking_id, seat_number, class) VALUES
(1, '12A', 'economy'),
(2, '1A', 'first');

-- Insert check-ins
INSERT INTO check_ins (booking_id, check_in_time, baggage_count) VALUES
(1, '2024-07-10 10:00:00', 2);

-- Insert flight status
INSERT INTO flight_status (flight_id, status_time, status) VALUES
(1, '2024-07-10 14:00:00', 'departed'),
(1, '2024-07-10 22:00:00', 'arrived');


