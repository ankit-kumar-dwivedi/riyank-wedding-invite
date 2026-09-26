// Ceremony metadata
const ceremonyMeta = {
    "Bangle Ceremony": { icon: "💚", cssClass: "event-bangle" },
    "Sagan":           { icon: "✨",   cssClass: "event-sagan" },
    "Haldi":           { icon: "🌼",  cssClass: "event-haldi" },
    "Mehndi":          { icon: "🌿",  cssClass: "event-mehndi" },
    "Sangeet":         { icon: "🎶",  cssClass: "event-sangeet" },
    "Wedding Ceremony":{ icon: "💍",  cssClass: "event-wedding" },
};

// Placeholder data for the events
const brideEvents = [
    {
        name: "Bangle Ceremony",
        date: "December 2, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/52GPUQLXstJevaf8A" target="_blank">Bhagwati Apartment, Chhatarpur</a>'
    },
    {
        name: "Sagan",
        date: "December 3, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/Dp9wFpvBLddt8b557" target="_blank">Gumbers Farm, Chattarpur</a>'
    },
    {
        name: "Haldi",
        date: "December 4, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/52GPUQLXstJevaf8A" target="_blank">Bhagwati Apartment, Chhatarpur</a>'
    },
    {
        name: "Mehndi",
        date: "December 4, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/52GPUQLXstJevaf8A" target="_blank">Bhagwati Apartment, Chhatarpur</a>'
    },
    {
        name: "Wedding Ceremony",
        date: "December 5, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/W88CM6vASKW1nsMj7" target="_blank">ALLLURE RAAKESH FARMS, Chattarpur</a>'
    }
];

const groomEvents = [
    {
        name: "Sagan",
        date: "December 3, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/Dp9wFpvBLddt8b557" target="_blank">Gumbers Farm, Chattarpur</a>'
    },
    {
        name: "Sangeet",
        date: "December 3, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/Dp9wFpvBLddt8b557" target="_blank">Gumbers Farm, Chattarpur</a>'
    },
    {
        name: "Haldi",
        date: "December 4, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/Dp9wFpvBLddt8b557" target="_blank">Gumbers Farm, Chattarpur</a>'
    },
    {
        name: "Wedding Ceremony",
        date: "December 5, 2026",
        time: "Time to be announced",
        venue: '<a href="https://maps.app.goo.gl/W88CM6vASKW1nsMj7" target="_blank">ALLLURE RAAKESH FARMS, Chattarpur</a>'
    }
];

// DOM Elements
const landingScreen = document.getElementById('landing-screen');
const itineraryScreen = document.getElementById('itinerary-screen');
const btnBride = document.getElementById('btn-bride');
const btnGroom = document.getElementById('btn-groom');
const btnBack = document.getElementById('btn-back');
const eventsContainer = document.getElementById('events-container');
const itineraryTitle = document.getElementById('itinerary-title');

// Functions
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    hideScreen.classList.add('hidden');
    
    // Small delay to allow the fade out before fading in
    setTimeout(() => {
        showScreen.classList.remove('hidden');
        showScreen.classList.add('active');
        // Scroll to top when switching screens
        window.scrollTo(0, 0);
    }, 300);
}

function renderEvents(events, side) {
    itineraryTitle.innerText = `${side}'s Itinerary`;
    document.getElementById('itinerary-subtitle').innerText = 'Your Schedule of Events';
    eventsContainer.innerHTML = '';

    events.forEach((event, index) => {
        const delay = index * 0.12;
        const meta = ceremonyMeta[event.name] || { icon: '📅', cssClass: 'event-wedding' };

        const eventEl = document.createElement('div');
        eventEl.className = `event-item ${meta.cssClass} fade-in`;
        eventEl.style.animationDelay = `${delay}s`;

        eventEl.innerHTML = `
            <div class="shimmer"></div>
            <div class="event-top-row">
                <div class="event-icon-wrap">${meta.icon}</div>
                <div class="event-title-group">
                    <div class="event-date">${event.date}</div>
                    <h3 class="event-name">${event.name}</h3>
                </div>
            </div>
            <div class="event-details">
                <div class="event-detail-row">
                    <span class="detail-icon">📍</span>
                    <span>${event.venue}</span>
                </div>
                <div class="event-detail-row">
                    <span class="detail-icon">🕒</span>
                    <span>${event.time}</span>
                </div>
            </div>
        `;

        eventsContainer.appendChild(eventEl);
    });
}

// Event Listeners
btnBride.addEventListener('click', () => {
    renderEvents(brideEvents, "Bride's Guests");
    switchScreen(landingScreen, itineraryScreen);
});

btnGroom.addEventListener('click', () => {
    renderEvents(groomEvents, "Groom's Guests");
    switchScreen(landingScreen, itineraryScreen);
});

btnBack.addEventListener('click', () => {
    switchScreen(itineraryScreen, landingScreen);
});
