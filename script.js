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

// Example data for requests and users
const requests = [
    { type: 'Add Room', user: 'john_doe', status: 'Pending' },
    { type: 'Create Account', user: 'jane_doe', status: 'Pending' },
];

const users = [
    { username: 'john_doe', status: 'Active' },
    { username: 'jane_doe', status: 'Inactive' },
];

// Populate requests and users in tables
function populateTables() {
    const requestTable = document.getElementById('requestTable').getElementsByTagName('tbody')[0];
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    requests.forEach((request) => {
        const row = requestTable.insertRow();
        row.innerHTML = `
            <td>${request.type}</td>
            <td>${request.user}</td>
            <td>${request.status}</td>
            <td>
                <button onclick="approveRequest('${request.user}')">Approve</button>
                <button onclick="deleteRequest('${request.user}')">Delete</button>
            </td>
        `;
    });

    users.forEach((user) => {
        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="toggleUserStatus('${user.username}')">Toggle Status</button>
            </td>
        `;
    });
}

// Example data for requests, users, and rooms
const requests = [
    { type: 'Add Room', user: 'john_doe', status: 'Pending' },
    { type: 'Create Account', user: 'jane_doe', status: 'Pending' },
];

const users = [
    { username: 'john_doe', status: 'Active' },
    { username: 'jane_doe', status: 'Inactive' },
];

const occupiedRooms = [
    { number: '101', status: 'Occupied' },
    { number: '201', status: 'Occupied' },
];

const availableRooms = [
    { number: '102', status: 'Available' },
    { number: '202', status: 'Available' },
];

// Populate requests and users in tables
function populateTables() {
    const requestTable = document.getElementById('requestTable').getElementsByTagName('tbody')[0];
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const occupiedTable = document.getElementById('occupiedRoomTable').getElementsByTagName('tbody')[0];
    const availableTable = document.getElementById('availableRoomTable').getElementsByTagName('tbody')[0];

    requests.forEach((request) => {
        const row = requestTable.insertRow();
        row.innerHTML = `
            <td>${request.type}</td>
            <td>${request.user}</td>
            <td>${request.status}</td>
            <td>
                <button onclick="approveRequest('${request.user}')">Approve</button>
                <button onclick="deleteRequest('${request.user}')">Delete</button>
            </td>
        `;
    });

    users.forEach((user) => {
        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="toggleUserStatus('${user.username}')">Toggle Status</button>
            </td>
        `;
    });

    occupiedRooms.forEach((room) => {
        const row = occupiedTable.insertRow();
        row.innerHTML = `
            <td>${room.number}</td>
            <td>${room.status}</td>
        `;
    });

    availableRooms.forEach((room) => {
        const row = availableTable.insertRow();
        row.innerHTML = `
            <td>${room.number}</td>
            <td>${room.status}</td>
        `;
    });
}

// Approve Request
function approveRequest(user) {
    alert(`Request for ${user} approved.`);
}

// Delete Request
function deleteRequest(user) {
    alert(`Request for ${user} deleted.`);
}

// Toggle User Status
function toggleUserStatus(user) {
    alert(`Toggled status for ${user}.`);
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Populate tables on load
window.onload = populateTables;
