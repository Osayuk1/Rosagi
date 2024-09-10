function initMap() {
    const map = new google.maps.Map(document.getElementById("tour-map"), {
        zoom: 5,
        center: { lat: 50.1109, lng: 8.6821 },  // Frankfurt, Germany (roughly central to all locations)
    });

    const locations = [
        { lat: 50.9186, lng: 8.9204, title: "Marburg" },
        { lat: 50.6118, lng: 10.6913, title: "Suhl" },
        { lat: 48.4214, lng: 10.8540, title: "Augsburg" },
        { lat: 51.7281, lng: 10.2525, title: "Osterode am Harz" },
        { lat: 49.3525, lng: 9.1442, title: "Mosbach" },
        { lat: 49.9957, lng: 9.5750, title: "Lohr" },
        { lat: 47.9804, lng: 8.8207, title: "Tuttlingen" },
        { lat: 48.0562, lng: 8.4530, title: "Villingen-Schwenningen" },
        { lat: 48.4549, lng: 10.2765, title: "Günzburg" },
        { lat: 48.2772, lng: 8.8508, title: "Balingen" },
        { lat: 47.2692, lng: 11.4041, title: "Innsbruck" },
        { lat: 47.0707, lng: 15.4395, title: "Graz" },
        { lat: 48.2082, lng: 16.3738, title: "Vienna" },
        { lat: 51.9090, lng: 8.3827, title: "Gütersloh" },
        { lat: 53.2464, lng: 10.4115, title: "Lüneburg" },
        { lat: 47.3769, lng: 8.5417, title: "Zürich" },
        { lat: 47.7238, lng: 10.3106, title: "Kempten" },
        { lat: 50.0517, lng: 8.6956, title: "Neu-Isenburg" },
        { lat: 51.3127, lng: 9.4797, title: "Kassel" }
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}

function buyTicket(city, date) {
    // Redirect to the tickets.html page with query parameters for city and date
    window.location.href = `tickets.html?city=${encodeURIComponent(city)}&date=${encodeURIComponent(date)}`;
}

window.onload = initMap;