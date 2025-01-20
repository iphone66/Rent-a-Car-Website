const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (like the HTML, CSS, JS)
app.use(express.static('public'));

// Body parser middleware to parse JSON
app.use(express.json());

// Example route to get available cars
app.get('/api/cars', (req, res) => {
    const cars = [
        { id: 1, name: 'Ford Mustang', pricePerDay: 50 },
        { id: 2, name: 'Chevrolet Camaro', pricePerDay: 70 }
    ];
    res.json(cars);
});

// Example POST route to handle bookings (in reality, you'd save to DB)
app.post('/api/book', (req, res) => {
    const { carName, pickupDate, dropoffDate } = req.body;

    if (!carName || !pickupDate || !dropoffDate) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Simulate a successful booking
    res.json({ message: 'Booking confirmed!', carName, pickupDate, dropoffDate });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
