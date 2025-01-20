// Function to show the booking modal
function bookCar(carName) {
    document.getElementById('car-name').textContent = `Odabrali ste auto: ${carName}`;
    document.getElementById('booking-modal').style.display = 'block';
}

// Function to close the booking modal
function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Function to handle booking confirmation
function confirmBooking() {
    const pickupDate = document.getElementById('pickup-date').value;
    const dropoffDate = document.getElementById('dropoff-date').value;

    if (pickupDate && dropoffDate) {
        alert(`Booking confirmed! Pickup Date: ${pickupDate}, Dropoff Date: ${dropoffDate}`);
        closeModal();
    } else {
        alert('Please select valid dates.');
    }
}
