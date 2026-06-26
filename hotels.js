// Hotels Data
// Muhamad Mawlud
const hotelsData = {
    'rotana-erbil': {
        name: 'Rotana Erbil Hotel',
        location: 'Erbil, Erbil',
        stars: 5,
        description: 'Luxury 5-star hotel in the heart of Erbil city with panoramic views.',
        images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 150, capacity: 2, floor: '1-5' },
            { type: 'Deluxe Room', price: 220, capacity: 2, floor: '6-10' },
            { type: 'Suite', price: 350, capacity: 4, floor: '11-15' },
            { type: 'Presidential Suite', price: 600, capacity: 4, floor: '16' }
        ]
    },
    'divan-erbil': {
        name: 'Divan Erbil Hotel',
        location: 'Erbil, Erbil',
        stars: 5,
        description: 'Elegant 5-star hotel offering world-class service and modern amenities.',
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Classic Room', price: 180, capacity: 2, floor: '1-8' },
            { type: 'Superior Room', price: 250, capacity: 2, floor: '9-14' },
            { type: 'Executive Suite', price: 400, capacity: 3, floor: '15-18' },
            { type: 'Royal Suite', price: 700, capacity: 4, floor: '19-20' }
        ]
    },
    'shaqlawa-resort': {
        name: 'Shaqlawa Resort Hotel',
        location: 'Shaqlawa, Erbil',
        stars: 4,
        description: 'Mountain resort with stunning views of Shaqlawa valley and fresh mountain air.',
        images: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 95, capacity: 2, floor: '1-3' },
            { type: 'Mountain View Room', price: 130, capacity: 2, floor: '4-6' },
            { type: 'Family Suite', price: 200, capacity: 5, floor: '7-8' }
        ]
    },
    'soran-palace': {
        name: 'Soran Palace Hotel',
        location: 'Soran, Erbil',
        stars: 4,
        description: 'Comfortable hotel in the beautiful town of Soran, gateway to Korek Mountain.',
        images: [
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking', 'gym'],
        rooms: [
            { type: 'Standard Room', price: 85, capacity: 2, floor: '1-4' },
            { type: 'Deluxe Room', price: 120, capacity: 2, floor: '5-7' },
            { type: 'Suite', price: 180, capacity: 4, floor: '8' }
        ]
    },
    'tangram-erbil': {
        name: 'Tangram Hotel Erbil',
        location: 'Erbil, Erbil',
        stars: 5,
        description: 'Modern luxury hotel with contemporary design and premium facilities.',
        images: [
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Comfort Room', price: 160, capacity: 2, floor: '1-6' },
            { type: 'Premium Room', price: 230, capacity: 2, floor: '7-12' },
            { type: 'Luxury Suite', price: 380, capacity: 4, floor: '13-16' },
            { type: 'Penthouse', price: 650, capacity: 4, floor: '17' }
        ]
    },
    'classy-hotel': {
        name: 'Classy Hotel Erbil',
        location: 'Erbil, Erbil',
        stars: 4,
        description: 'Stylish and affordable hotel in the center of Erbil.',
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 75, capacity: 2, floor: '1-3' },
            { type: 'Deluxe Room', price: 110, capacity: 2, floor: '4-6' },
            { type: 'Suite', price: 160, capacity: 3, floor: '7' }
        ]
    },
    'grand-millennium': {
        name: 'Grand Millennium Sulaymaniyah',
        location: 'Sulaymaniyah, Sulaymaniyah',
        stars: 5,
        description: 'Premier 5-star hotel offering luxury accommodation in Sulaymaniyah.',
        images: [
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Superior Room', price: 140, capacity: 2, floor: '1-7' },
            { type: 'Executive Room', price: 200, capacity: 2, floor: '8-14' },
            { type: 'Club Suite', price: 320, capacity: 4, floor: '15-18' },
            { type: 'Presidential Suite', price: 550, capacity: 4, floor: '19' }
        ]
    },
    'titanic-sulaymaniyah': {
        name: 'Titanic Hotel Sulaymaniyah',
        location: 'Sulaymaniyah, Sulaymaniyah',
        stars: 4,
        description: 'Modern hotel with excellent amenities and city views.',
        images: [
            'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1587213811864-46e59f6873b1?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 100, capacity: 2, floor: '1-4' },
            { type: 'Deluxe Room', price: 150, capacity: 2, floor: '5-8' },
            { type: 'Suite', price: 230, capacity: 4, floor: '9-10' }
        ]
    },
    'copthorne-sulaymaniyah': {
        name: 'Copthorne Hotel Sulaymaniyah',
        location: 'Sulaymaniyah, Sulaymaniyah',
        stars: 4,
        description: 'International brand hotel with professional service and comfort.',
        images: [
            'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 110, capacity: 2, floor: '1-5' },
            { type: 'Superior Room', price: 160, capacity: 2, floor: '6-9' },
            { type: 'Executive Suite', price: 250, capacity: 3, floor: '10-12' }
        ]
    },
    'ramada-sulaymaniyah': {
        name: 'Ramada by Wyndham Sulaymaniyah',
        location: 'Sulaymaniyah, Sulaymaniyah',
        stars: 4,
        description: 'Well-known brand offering reliable quality and comfort.',
        images: [
            'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 90, capacity: 2, floor: '1-4' },
            { type: 'Deluxe Room', price: 130, capacity: 2, floor: '5-7' },
            { type: 'Suite', price: 190, capacity: 4, floor: '8' }
        ]
    },
    'selahaddin-duhok': {
        name: 'Selahaddin Ayyubi Hotel',
        location: 'Duhok, Duhok',
        stars: 4,
        description: 'Comfortable hotel in Duhok with mountain views.',
        images: [
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 80, capacity: 2, floor: '1-3' },
            { type: 'Deluxe Room', price: 120, capacity: 2, floor: '4-6' },
            { type: 'Suite', price: 170, capacity: 4, floor: '7' }
        ]
    },
    'jiyan-mall-hotel': {
        name: 'Jiyan Mall Hotel',
        location: 'Duhok, Duhok',
        stars: 4,
        description: 'Modern hotel connected to Jiyan Mall shopping center.',
        images: [
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking', 'gym'],
        rooms: [
            { type: 'Standard Room', price: 70, capacity: 2, floor: '1-3' },
            { type: 'Superior Room', price: 100, capacity: 2, floor: '4-5' },
            { type: 'Suite', price: 150, capacity: 3, floor: '6' }
        ]
    },
    'duhok-palace': {
        name: 'Duhok Palace Hotel',
        location: 'Duhok, Duhok',
        stars: 5,
        description: 'Luxury hotel with spectacular views of Duhok Dam.',
        images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'parking'],
        rooms: [
            { type: 'Classic Room', price: 120, capacity: 2, floor: '1-5' },
            { type: 'Lake View Room', price: 180, capacity: 2, floor: '6-10' },
            { type: 'Executive Suite', price: 280, capacity: 4, floor: '11-13' },
            { type: 'Royal Suite', price: 450, capacity: 4, floor: '14' }
        ]
    },
    'zakho-grand': {
        name: 'Zakho Grand Hotel',
        location: 'Zakho, Duhok',
        stars: 3,
        description: 'Comfortable hotel near the historic Dalal Bridge in Zakho.',
        images: [
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 55, capacity: 2, floor: '1-2' },
            { type: 'Deluxe Room', price: 80, capacity: 2, floor: '3-4' },
            { type: 'Family Room', price: 110, capacity: 4, floor: '5' }
        ]
    },
    'amedi-resort': {
        name: 'Amedi Resort Hotel',
        location: 'Amedi, Duhok',
        stars: 4,
        description: 'Mountain resort in the ancient town of Amedi with panoramic views.',
        images: [
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 85, capacity: 2, floor: '1-2' },
            { type: 'Mountain View Room', price: 120, capacity: 2, floor: '3-4' },
            { type: 'Suite', price: 170, capacity: 4, floor: '5' }
        ]
    },
    'halabja-palace': {
        name: 'Halabja Palace Hotel',
        location: 'Halabja, Halabja',
        stars: 3,
        description: 'Central hotel in Halabja with easy access to local attractions.',
        images: [
            'https://images.unsplash.com/photo-1587213811864-46e59f6873b1?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking'],
        rooms: [
            { type: 'Standard Room', price: 50, capacity: 2, floor: '1-2' },
            { type: 'Deluxe Room', price: 75, capacity: 2, floor: '3' },
            { type: 'Family Room', price: 100, capacity: 4, floor: '4' }
        ]
    },
    'ahmed-awa-resort': {
        name: 'Ahmed Awa Resort',
        location: 'Ahmed Awa, Halabja',
        stars: 4,
        description: 'Nature resort near the beautiful Ahmed Awa waterfall.',
        images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop'
        ],
        amenities: ['wifi', 'restaurant', 'parking', 'pool'],
        rooms: [
            { type: 'Standard Room', price: 75, capacity: 2, floor: '1-2' },
            { type: 'Waterfall View Room', price: 110, capacity: 2, floor: '3-4' },
            { type: 'Family Suite', price: 160, capacity: 5, floor: '5' }
        ]
    }
};

// Amenity icons mapping
const amenityIcons = {
    wifi: { icon: '📶', label: 'Wifi' },
    pool: { icon: '🏊', label: 'Pool' },
    spa: { icon: '💆', label: 'Spa' },
    gym: { icon: '🏋️', label: 'Gym' },
    restaurant: { icon: '🍽️', label: 'Restaurant' },
    parking: { icon: '🚗', label: 'Parking' }
};

// Current state
let currentHotel = null;
let currentRoom = null;
let currentDuration = 1;

// Province Filter
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const hotelCards = document.querySelectorAll('.hotel-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');

            const province = this.dataset.province;

            hotelCards.forEach(card => {
                if (province === 'all' || card.dataset.province === province) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Duration buttons
    const durationBtns = document.querySelectorAll('.duration-btn');
    durationBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            durationBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const days = parseInt(this.dataset.days) || parseInt(this.dataset.nights) || 1;
            currentDuration = days;
            updatePriceCalculation();
        });
    });
});

// Open Hotel Details Modal
function openHotelDetails(hotelId) {
    const hotel = hotelsData[hotelId];
    if (!hotel) return;

    currentHotel = hotel;
    currentHotel.id = hotelId;

    // Set main image
    document.getElementById('hotelMainImage').src = hotel.images[0];

    // Set thumbnails
    const thumbnailsContainer = document.getElementById('hotelThumbnails');
    thumbnailsContainer.innerHTML = hotel.images.map((img, index) => `
        <img src="${img}" alt="Hotel thumbnail ${index + 1}" 
             onclick="changeMainImage('${img}')" 
             class="${index === 0 ? 'active' : ''}">
    `).join('');

    // Set stars
    const starsContainer = document.getElementById('hotelStarsDetail');
    starsContainer.innerHTML = Array(5).fill(0).map((_, i) =>
        `<i class="${i < hotel.stars ? 'fas' : 'far'} fa-star"></i>`
    ).join('');

    // Set hotel info
    document.getElementById('hotelNameDetail').textContent = hotel.name;
    document.getElementById('hotelLocationDetail').textContent = hotel.location;
    document.getElementById('hotelDescription').textContent = hotel.description;

    // Set amenities
    const amenitiesContainer = document.getElementById('hotelAmenities');
    amenitiesContainer.innerHTML = hotel.amenities.map(amenity => {
        const info = amenityIcons[amenity];
        return `<span class="amenity-tag">${info.icon} ${info.label}</span>`;
    }).join('');

    // Set rooms
    const roomsContainer = document.getElementById('roomsGrid');
    roomsContainer.innerHTML = hotel.rooms.map((room, index) => `
        <div class="room-card">
            <div class="room-info">
                <h5>${room.type}</h5>
                <p><i class="fas fa-user-friends"></i> ${room.capacity} persons</p>
                <p><i class="fas fa-building"></i> Floor: ${room.floor}</p>
            </div>
            <div class="room-price-section">
                <div class="room-price">$${room.price}<span>/night</span></div>
                <button class="book-now-btn" onclick="openBookingModal(${index})">Book Now</button>
            </div>
        </div>
    `).join('');

    // Show modal
    document.getElementById('hotelDetailsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Change main image in hotel details
function changeMainImage(src) {
    document.getElementById('hotelMainImage').src = src;
    document.querySelectorAll('#hotelThumbnails img').forEach(img => {
        img.classList.toggle('active', img.src === src);
    });
}

// Close Hotel Details Modal
function closeHotelDetails() {
    document.getElementById('hotelDetailsModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Open Booking Modal
function openBookingModal(roomIndex) {
    if (!currentHotel) return;

    currentRoom = currentHotel.rooms[roomIndex];
    currentDuration = 1;

    // Set room info
    document.getElementById('roomTypeName').textContent = currentRoom.type;
    document.getElementById('bookingPrice').textContent = `$${currentRoom.price}`;
    document.getElementById('bookingHotelName').textContent = currentHotel.name;
    document.getElementById('roomFloor').textContent = currentRoom.floor;
    document.getElementById('roomCapacity').textContent = `${currentRoom.capacity} persons`;

    // Reset duration buttons
    document.querySelectorAll('.duration-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === 2); // Default to "1 Night"
    });

    updatePriceCalculation();

    // Close hotel details and open booking modal
    document.getElementById('hotelDetailsModal').classList.remove('active');
    document.getElementById('bookingModal').classList.add('active');
}

// Update price calculation
function updatePriceCalculation() {
    if (!currentRoom) return;

    const pricePerNight = currentRoom.price;
    const totalPrice = pricePerNight * currentDuration;

    document.getElementById('pricePerNight').textContent = `$${pricePerNight}`;
    document.getElementById('durationText').textContent = currentDuration === 1 ? '1 night' : `${currentDuration} nights`;
    document.getElementById('totalPrice').textContent = `$${totalPrice}`;
}

// Close Booking Modal
function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Confirm Booking
function confirmBooking() {
    if (!currentHotel || !currentRoom) return;

    const totalPrice = currentRoom.price * currentDuration;

    alert(`Booking Confirmed!\n\nHotel: ${currentHotel.name}\nRoom: ${currentRoom.type}\nDuration: ${currentDuration} night(s)\nTotal: $${totalPrice}\n\nThank you for your booking!`);

    closeBookingModal();
    document.body.style.overflow = '';
}

// Close modals when clicking outside
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeHotelDetails();
        closeBookingModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeHotelDetails();
        closeBookingModal();
    }
});
