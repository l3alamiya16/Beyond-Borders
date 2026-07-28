const body = document.body;
const paris = document.getElementById('paris');
const roma = document.getElementById('roma');
const maldives = document.getElementById('maldives');
let title = document.getElementById('Title')
let description = document.getElementById('description');



paris.addEventListener( 'mouseenter', function() {
    body.style.backgroundImage = "url('parisground.jpg')"
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.transition = '1s ease';

    description.textContent =
    "Discover the magic of Paris, a city where history, art, and romance come together to create an unforgettable experience. Wander through charming streets lined with elegant cafés and boutiques, admire the iconic Eiffel Tower, and marvel at world-famous masterpieces in the Louvre Museum. Cruise along the peaceful Seine River, explore the historic neighborhoods of Montmartre and Le Marais, and indulge in authentic French cuisine, from freshly baked pastries to gourmet dining. Whether you're seeking cultural treasures, breathtaking architecture, vibrant nightlife, or a romantic escape, Paris offers endless opportunities to create lifelong memories. Every corner of the City of Light invites you to experience beauty, adventure, and timeless elegance.";
    description.style.color = "white";
    description.style.textAlign = "center";
    description.style.margin = "50px";
    description.style.background = "#b8571e98";
    description.style.padding = "20px"
    description.style.borderRadius = "15px"
    description.style.transition = "1s ease"

    
})

roma.addEventListener( 'mouseenter', function() {
    body.style.backgroundImage = "url('romaground.jpg')"
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.transition = '1s ease';

    description.textContent =
    "Step into the heart of history with Rome, a city where ancient wonders and vibrant modern life exist side by side. Walk through the majestic Colosseum, admire the architectural brilliance of the Roman Forum and the Pantheon, and toss a coin into the famous Trevi Fountain to ensure your return. Wander through picturesque piazzas, discover hidden alleyways filled with authentic Italian charm, and savor traditional dishes like fresh pasta, wood-fired pizza, and creamy gelato. From breathtaking landmarks and world-renowned art to lively cafés and unforgettable sunsets, Rome offers a journey through more than two thousand years of history while surrounding you with the warmth and passion of Italian culture. Every visit promises adventure, inspiration, and memories that will last a lifetime.";
    description.style.color = "black";
    description.style.textAlign = "center";
    description.style.margin = "50px";
    description.style.background = "rgb(42, 72, 100, 0.7)";
    description.style.padding = "20px"
    description.style.borderRadius = "15px"
    description.style.transition = "1s ease"
    
})

maldives.addEventListener( 'mouseenter', function() {
    body.style.backgroundImage = "url('maldivesground.jpg')"
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.transition = '1s ease';

    description.textContent =
    "Escape to the breathtaking Maldives, a tropical paradise where crystal-clear turquoise waters, powder-soft white sand beaches, and luxurious overwater villas create the perfect island getaway. Dive into vibrant coral reefs filled with colorful marine life, swim alongside tropical fish, or simply relax beneath swaying palm trees while enjoying spectacular ocean views. Experience unforgettable sunsets, indulge in world-class dining, and discover the peaceful beauty of secluded islands surrounded by the endless Indian Ocean. Whether you're dreaming of a romantic honeymoon, an exciting underwater adventure, or a tranquil escape from everyday life, the Maldives offers the perfect blend of luxury, relaxation, and natural wonder, making every moment a memory you'll treasure forever.";
    description.style.color = "black";
    description.style.textAlign = "center";
    description.style.margin = "50px";
    description.style.background = "rgba(0, 255, 255, 0.3)";
    description.style.padding = "20px"
    description.style.borderRadius = "15px"
    description.style.transition = "1s ease"
    
})

/*----------------------------------------------click-----------------------------------------------------------------*/

paris.addEventListener( 'click', function() {
   window.location.href = 'paris.html'
})

roma.addEventListener( 'click', function() {
   window.location.href = 'roma.html'
})

maldives.addEventListener( 'click', function() {
   window.location.href = 'maldives.html'
})