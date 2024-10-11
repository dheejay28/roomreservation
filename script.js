document.getElementById('reserveRoomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const roomSelect = document.getElementById('roomSelect').value;
    const reservationCode = `RES-${new Date().getTime()}`; // Example code generation
    alert(`Room ${roomSelect} has been reserved. Reservation Code: ${reservationCode}`);
    document.getElementById('reservationCode').innerText = `Your reservation code: ${reservationCode}`;
    document.getElementById('reservationCode').classList.remove('hidden');
});

document.getElementById('returnRoomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('reservationCode').value;
    alert(`Room returned successfully. Reservation Code: ${code}`);
    document.getElementById('returnMessage').innerText = `Room with code ${code} returned.`;
    document.getElementById('returnMessage').classList.remove('hidden');
});

document.getElementById('addRoomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const roomNumber = document.getElementById('roomNumber').value;
    alert(`Room ${roomNumber} has been added successfully.`);
});
