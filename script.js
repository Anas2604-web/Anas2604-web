// Sample data structure for storing rooms
let rooms = [];

// Function to add a new room
function addRoom(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const rent = document.getElementById('rent').value;
    const amenities = document.getElementById('amenities').value.split(',');
    const location = document.getElementById('location').value;
    const contactInfo = document.getElementById('contactInfo').value;

    // Create room object
    const room = {
        title,
        description,
        rent,
        amenities,
        location,
        contactInfo
    };

    // Add room to rooms array and clear the form
    rooms.push(room);
    document.getElementById('add-room-form').reset();

    // Update the room listing
    displayRooms();
}

// Function to display rooms
function displayRooms() {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '';

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';

        roomCard.innerHTML = `
            <p class="room-title">${room.title}</p>
            <p class="room-detail">${room.description}</p>
            <p class="room-detail"><strong>Rent:</strong> $${room.rent}</p>
            <p class="room-detail"><strong>Amenities:</strong> ${room.amenities.join(', ')}</p>
            <p class="room-detail"><strong>Location:</strong> ${room.location}</p>
            <p class="room-detail"><strong>Contact:</strong> ${room.contactInfo}</p>
        `;

        roomList.appendChild(roomCard);
    });
}

// Attach form submit event
document.getElementById('add-room-form').addEventListener('submit', addRoom);
