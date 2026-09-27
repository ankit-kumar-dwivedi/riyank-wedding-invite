// Ceremony metadata
const ceremonyMeta = {
    "Bangle Ceremony": { icon: "🪔", image: "assets/bangle-ceremony-without-bg.webp", scale: 1.0 },
    "Sagan": { icon: "✨", image: "assets/sagan-bg-removed.png", scale: 1.8 },
    "Tilak": { icon: "✨", image: "assets/sagan-bg-removed.png", scale: 1.8, dressCode: "Ethnic", dressColor: "maroon" },
    "Haldi": { icon: "🪷", image: "assets/haldi-without-bg.png", scale: 1.0, dressCode: "Yellow & Sunshine Hues", dressColor: "yellow" },
    "Mehndi": { icon: "🌿", image: "assets/mahendi-without-bg.png", scale: 1.0, dressCode: "Green & Earthy Hues", dressColor: "green" },
    "Sangeet": { icon: "🎵", image: "assets/sangeet.png", scale: 1.4, dressCode: "Party Wear", dressColor: "gold" },
    "Wedding Ceremony": { icon: "💍", image: "assets/wedding.png", scale: 1.5 }
};

// Data for the events
const brideEvents = [
    {
        name: "Bangle Ceremony",
        date: "Wednesday, December 2, 2026",
        time: "4:00 PM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A",
        image: "assets/function-images/bangle-ceremony-garima.jpeg"
    },
    {
        name: "Sagan",
        date: "Thursday, December 3, 2026",
        time: "10:00 AM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557",
        image: "assets/function-images/sagan-tilak.jpeg"
    },
    {
        name: "Haldi",
        date: "Friday, December 4, 2026",
        time: "10:00 AM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A",
        image: "assets/function-images/haldi-garima.jpeg"
    },
    {
        name: "Mehndi",
        date: "Friday, December 4, 2026",
        time: "4:00 PM",
        venue: "Bhagwati Apartment, Chhatarpur",
        link: "https://maps.app.goo.gl/52GPUQLXstJevaf8A",
        image: "assets/function-images/mahendi-garima.jpeg"
    },
    {
        name: "Wedding Ceremony",
        date: "Saturday, December 5, 2026",
        time: "7:00 PM",
        venue: "Alllure Raakesh Farms, Chattarpur",
        link: "https://maps.app.goo.gl/W88CM6vASKW1nsMj7",
        image: "assets/function-images/wedding.jpeg"
    }
];

const groomEvents = [
    {
        name: "Tilak",
        date: "Thursday, December 3, 2026",
        time: "10:00 AM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557",
        image: "assets/function-images/sagan-tilak.jpeg"
    },
    {
        name: "Sangeet",
        date: "Thursday, December 3, 2026",
        time: "8:00 PM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557",
        image: "assets/function-images/sangeet-ankit.jpeg"
    },
    {
        name: "Haldi",
        date: "Friday, December 4, 2026",
        time: "12:00 PM",
        venue: "Gumbers Farm, Chattarpur",
        link: "https://maps.app.goo.gl/Dp9wFpvBLddt8b557",
        image: "assets/function-images/haldi-ankit.jpeg"
    },
    {
        name: "Wedding Ceremony",
        date: "Saturday, December 5, 2026",
        time: "7:00 PM",
        venue: "Alllure Raakesh Farms, Chattarpur",
        link: "https://maps.app.goo.gl/W88CM6vASKW1nsMj7",
        image: "assets/function-images/wedding.jpeg"
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

        const imgUrl = event.image || meta.image;
        const imgHtml = imgUrl
            ? `<div class="event-image-wrap"><img src="${imgUrl}" alt="${event.name}" class="event-image" style="--img-scale: 1.0"></div>`
            : `<div class="event-icon-wrap">${meta.icon}</div>`;

        const dressCodeHtml = meta.dressCode
            ? `<div class="event-dress-code">
                   <div class="color-dot ${meta.dressColor}"></div>
                   <span><strong>Dress Code:</strong> ${meta.dressCode}</span>
               </div>`
            : '';

        eventEl.innerHTML = `
            ${imgHtml}
            <div class="event-body">
                <h3 class="event-name">${event.name}</h3>
                <div class="event-date">${event.date} | ${event.time}</div>
                ${dressCodeHtml}
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
const weddingDate = new Date("2026-12-05T19:00:00+05:30").getTime();

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

// Fade out scroll indicator on scroll
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 50) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '0.8';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

// Flower shower effect on couple photo
document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.querySelector('.hero-photo-container');
    if (!photoContainer) return;

    // Use Intersection Observer to detect when photo comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startFlowerShower(photoContainer);
                observer.unobserve(entry.target); // only shower once
            }
        });
    }, { threshold: 0.3 }); // trigger when 30% of the photo is visible

    observer.observe(photoContainer);
});

function startFlowerShower(container) {
    const numPetals = 100;

    for (let i = 0; i < numPetals; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'flower-petal';

            // Random horizontal position and size
            const leftPos = Math.random() * 100;
            const size = Math.random() * 8 + 8; // 8px to 16px

            // Random animation duration
            const fallDuration = Math.random() * 3 + 10; // 3s to 6s
            const swayDuration = Math.random() * 2 + 5; // 2s to 4s

            petal.style.left = `${leftPos}%`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;

            // Randomize colors slightly (pink, light gold, white-ish)
            const colors = ['#f4c3d6', '#fdf4ec', '#d1b88a'];
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            petal.style.animation = `petal-fall ${fallDuration}s linear forwards, petal-sway ${swayDuration}s ease-in-out infinite alternate`;

            container.appendChild(petal);

            // Remove petal after falling
            setTimeout(() => {
                if (container.contains(petal)) {
                    petal.remove();
                }
            }, fallDuration * 1000);

        }, Math.random() * 5500); // spread creation over 2.5 seconds
    }
}
