document.addEventListener('DOMContentLoaded', () => {
    let rooms = {
        "101": "Vacant", "102": "Vacant", "103": "Vacant", "104": "Vacant",
        "201": "Vacant", "202": "Vacant", "203": "Vacant", "204": "Vacant",
        "301": "Vacant", "302": "Vacant", "303": "Vacant"
    };

    let reservations = {};

    // Handle Room Reservation
    document.getElementById('reserveForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const roomNumber = document.getElementById('roomNumber').value;
        const section = document.getElementById('section').value;
        const time = document.getElementById('time').value;
        const date = document.getElementById('date').value;

        if (rooms[roomNumber] === "Vacant") {
            let code = Math.random().toString(36).substring(2, 10).toUpperCase();
            rooms[roomNumber] = "Occupied";
            reservations[roomNumber] = { section, time, date, code };
            alert(`Room reserved. Reservation code: ${code}`);
        } else {
            alert('Room already occupied!');
        }
    });

    // Handle Room Return
    document.getElementById('returnForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const roomNumber = document.getElementById('returnRoomNumber').value;
        const reservationCode = document.getElementById('reservationCode').value;

        if (rooms[roomNumber] === "Occupied" && reservations[roomNumber].code === reservationCode) {
            rooms[roomNumber
