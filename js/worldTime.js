// Concept By Renz
// Powered By ChatGPT

// List Zona Waktu
const worldZones = {
    Asia: {
        "Indonesia": [
            { name: "Jakarta (WIB)", tz: "Asia/Jakarta" },
            { name: "Makassar (WITA)", tz: "Asia/Makassar" },
            { name: "Jayapura (WIT)", tz: "Asia/Jayapura" }
        ],
        "Jepang": [
            { name: "Tokyo (JST)", tz: "Asia/Tokyo" }
        ],
        "Korea Selatan": [
            { name: "Seoul (KST)", tz: "Asia/Seoul" }
        ],
        "India": [
            { name: "New Delhi (IST)", tz: "Asia/Kolkata" }
        ]
    },
    Europe: {
        "Inggris": [
            { name: "London (GMT)", tz: "Europe/London" }
        ],
        "Jerman": [
            { name: "Berlin (CET)", tz: "Europe/Berlin" }
        ],
        "Rusia": [
            { name: "Moscow (MSK)", tz: "Europe/Moscow" }
        ]
    },
    America: {
        "Amerika Serikat": [
            { name: "New York (EST)", tz: "America/New_York" },
            { name: "Los Angeles (PST)", tz: "America/Los_Angeles" }
        ],
        "Meksiko": [
            { name: "Mexico City (CST)", tz: "America/Mexico_City" }
        ],
        "Kanada": [
            { name: "Toronto (EST)", tz: "America/Toronto" }
        ]
    },
    Africa: {
        "Mesir": [
            { name: "Cairo (EET)", tz: "Africa/Cairo" }
        ],
        "Afrika Selatan": [
            { name: "Cape Town (SAST)", tz: "Africa/Johannesburg" }
        ],
        "Nigeria": [
            { name: "Lagos (WAT)", tz: "Africa/Lagos" }
        ]
    },
    Australia: {
        "Australia": [
            { name: "Sydney (AEDT)", tz: "Australia/Sydney" },
            { name: "Perth (AWST)", tz: "Australia/Perth" },
            { name: "Melbourne (AEDT)", tz: "Australia/Melbourne" }
        ]
    }
};

// Pastikan elemen tanggal ada sebelum mengubah teksnya
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById('tanggal');
    if (dateElement) {
        const date = new Date();
        const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        dateElement.innerText = date.toLocaleDateString('id-ID', options);
    }
});

// Function buat update waktu
function updateTime() {
    const container = document.getElementById("timeContainer");
    if (!container) return;

    container.innerHTML = ""; // Hapus list lama

    Object.keys(worldZones).forEach(benua => {
        const section = document.createElement("div");
        section.innerHTML = `<h2>${benua}</h2>`;
        container.appendChild(section);

        Object.keys(worldZones[benua]).forEach(negara => {
            const countrySection = document.createElement("div");
            const list = document.createElement("ul"); // Buat elemen ul sebelum dipakai

            countrySection.innerHTML = `<h3>${negara}</h3>`;
            list.classList.add("time-list"); // Tambahkan class untuk styling
            countrySection.appendChild(list);
            container.appendChild(countrySection);

            worldZones[benua][negara].forEach(zone => {
                const now = new Date();
                const timeString = new Intl.DateTimeFormat('id-ID', {
                    hour: '2-digit', minute: '2-digit', second: '2-digit', 
                    timeZone: zone.tz
                }).format(now);

                const listItem = document.createElement("li");
                listItem.textContent = `${zone.name}: ${timeString}`;
                list.appendChild(listItem);
            });
        });
    });
}

// Jalankan update waktu saat dokumen siap
document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});