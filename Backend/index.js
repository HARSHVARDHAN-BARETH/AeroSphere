const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Harsh@1234',
    database: 'airline'
});

const promisePool = connection.promise();

app.listen(8000, () => {
    console.log('Server running on port 8000...');
});

app.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get('/flights', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM flights');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/users', async (req, res, next) => {
    try {
        const { username, password, email, first_name, last_name, date_of_birth, role } = req.body;

        const sql = 'INSERT INTO users (username, password, email, first_name, last_name, date_of_birth, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [username, password, email, first_name, last_name, date_of_birth, role];

        const [result] = await promisePool.query(sql, values);
        res.status(201).json({ message: 'User added successfully', userID: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/flights', async (req, res, next) => {
    try {
        const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;

        const sql = 'INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [flight_number, origin, destination, departure_time, arrival_time, status];

        const [result] = await promisePool.query(sql, values);
        res.status(201).json({ message: 'Flight added successfully', flightID: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new booking
app.post('/bookings', async (req, res) => {
    try {
        const { user_id, flight_id, booking_date, status } = req.body;
        const sql = 'INSERT INTO bookings (user_id, flight_id, booking_date, status) VALUES (?, ?, ?, ?)';
        const values = [user_id, flight_id, booking_date, status];
        const [result] = await promisePool.query(sql, values);
        res.status(201).json({ message: 'Booking created successfully', bookingID: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all bookings
app.get('/bookings', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM bookings');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Create a new ticket
app.post('/tickets', async (req, res) => {
    try {
        const { booking_id, seat_number, class: ticketClass } = req.body;
        const sql = 'INSERT INTO tickets (booking_id, seat_number, class) VALUES (?, ?, ?)';
        const values = [booking_id, seat_number, ticketClass];
        const [result] = await promisePool.query(sql, values);
        res.status(201).json({ message: 'Ticket created successfully', ticketID: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all tickets
app.get('/tickets', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM tickets');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get all aircrafts
app.get("/aircrafts", async(req, res,next)=>{
    try{
        const [rows] = await promisePool.query('SELECT * FROM aircraft');
        res.json(rows);
    }catch(err)
    {
        res.status(500).json({message: err.message});
    }
})


//getting id of passanger
app.get('/select/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await promisePool.query('SELECT * FROM users WHERE user_id = ?', [id]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]); // Return the first row
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
