// Ceremony metadata
const ceremonyMeta = {
    "Bangle Ceremony": { icon: "🪔", image: "assets/bangle-ceremony-without-bg.webp", scale: 1.0 },
    "Sagan":           { icon: "✨", image: "assets/sagan-bg-removed.png",           scale: 1.8 },
    "Tilak":           { icon: "✨", image: "assets/sagan-bg-removed.png",           scale: 1.8 },
    "Haldi":           { icon: "🪷", image: "assets/haldi-without-bg.png",           scale: 1.0 },
    "Mehndi":          { icon: "🌿", image: "assets/mahendi-without-bg.png",         scale: 1.0 },
    "Sangeet":         { icon: "🎵", image: "assets/sangeet.png",                    scale: 1.4 },
    "Wedding Ceremony":{ icon: "💍", image: "assets/wedding.png",                   scale: 1.5 }
};

// Data for the events
const brideEvents = [
    {
        name: "Bangle Ceremony",
        date: "Wednesday, December 2, 2026",
        time: "4:00 PM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A"
    },
    {
        name: "Sagan",
        date: "Thursday, December 3, 2026",
        time: "7:00 PM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557"
    },
    {
        name: "Haldi",
        date: "Friday, December 4, 2026",
        time: "10:00 AM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A"
    },
    {
        name: "Mehndi",
        date: "Friday, December 4, 2026",
        time: "4:00 PM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A"
    },
    {
        name: "Wedding Ceremony",
        date: "Saturday, December 5, 2026",
        time: "7:00 PM",
        venue: "ALLLURE RAAKESH FARMS, Chattarpur",
        link: "https://maps.app.goo.gl/W88CM6vASKW1nsMj7"
    }
];

const groomEvents = [
    {
        name: "Tilak",
        date: "Thursday, December 3, 2026",
        time: "7:00 PM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557"
    },
    {
        name: "Sangeet",
        date: "Thursday, December 3, 2026",
        time: "8:00 PM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557"
    },
    {
        name: "Haldi",
        date: "Friday, December 4, 2026",
        time: "10:00 AM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557"
    },
    {
        name: "Wedding Ceremony",
        date: "Saturday, December 5, 2026",
        time: "7:00 PM",
        venue: "ALLLURE RAAKESH FARMS, Chattarpur",
        link: "https://maps.app.goo.gl/W88CM6vASKW1nsMj7"
    }
];

// DOM Elements
const eventsContainer = document.getElementById('events-container');

function renderEvents(events) {
    if (!eventsContainer) return;
    eventsContainer.innerHTML = '';

    events.forEach((event, index) => {
        const delay = index * 0.15;
        const meta = ceremonyMeta[event.name] || { icon: '✨' };

        const eventEl = document.createElement('div');
        eventEl.className = `event-item fade-in`;
        eventEl.style.animationDelay = `${delay}s`;

        const scale = meta.scale || 1.0;
        const imgHtml = meta.image
            ? `<div class="event-image-wrap"><img src="${meta.image}" alt="${event.name}" class="event-image" style="--img-scale: ${scale}"></div>`
            : `<div class="event-icon-wrap">${meta.icon}</div>`;

        eventEl.innerHTML = `
            ${imgHtml}
            <div class="event-body">
                <h3 class="event-name">${event.name}</h3>
                <div class="event-date">${event.date} | ${event.time}</div>
                <div class="event-venue">${event.venue}</div>
                <a href="${event.link}" target="_blank" class="btn-directions">
                    📍 Get Directions
                </a>
            </div>
        `;

        eventsContainer.appendChild(eventEl);
    });
}

// Countdown Timer
const weddingDate = new Date("Dec 4, 2026 10:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<div style='font-family: var(--font-heading); font-size: 3rem; color: var(--primary-color);'>The Celebration has Begun!</div>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);
