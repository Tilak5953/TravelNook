/* 
========================================================================
   TRAVELNOOK - INTERACTIVE JAVASCRIPT
   Core Web Interactions, Modals, Sliders, Filters, and Validations
========================================================================
*/

// --- Destination Data Store (8 Hot Destinations) ---
const destinationsData = [
    {
        id: 'goa',
        name: 'Goa',
        tag: 'Beach Paradise',
        category: 'honeymoon',
        rating: 4.8,
        reviews: 240,
        price: 12499,
        duration: '4 Days, 3 Nights',
        bestTime: 'November to February',
        included: 'Resort Stay, Breakfast, Scuba Diving, North Goa Tour',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        desc: 'Goa is India\'s pocket-sized paradise, famous for its pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water activities.',
        itinerary: [
            { day: 'Day 1: Arrival & Sunset Cruise', desc: 'Arrive in Goa, check in to your beach resort. Relax, and in the evening, enjoy a scenic cruise along the Mandovi River.' },
            { day: 'Day 2: North Goa Beach Adventure', desc: 'Explore Calangute, Baga, and Anjuna beaches. Enjoy water sports like parasailing and jet-skiing, followed by a visit to Fort Aguada.' },
            { day: 'Day 3: South Goa Cultural Tour', desc: 'Visit historic churches of Old Goa, Mangeshi Temple, spice plantations with a traditional lunch, and Colva Beach.' },
            { day: 'Day 4: Departure', desc: 'Indulge in some morning shopping at local flea markets before heading to the airport/station for your journey home.' }
        ]
    },
    {
        id: 'manali',
        name: 'Manali',
        tag: 'Hill Station',
        category: 'adventure',
        rating: 4.7,
        reviews: 185,
        price: 14999,
        duration: '5 Days, 4 Nights',
        bestTime: 'October to June',
        included: 'Luxury Cottage, Cab for Sightseeing, Solang Valley Entry',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
        desc: 'Nestled in the mountains of Himachal Pradesh, Manali is a magnetic hill station offering snow-capped peaks, lush pine forests, and adrenaline-pumping adventures.',
        itinerary: [
            { day: 'Day 1: Arrive in Manali', desc: 'Check in to your cozy cottage with mountain views. Spend the evening stroll-walking on the famous Mall Road.' },
            { day: 'Day 2: Manali Local Sightseeing', desc: 'Visit Hadimba Temple, Vashisht Hot Water Springs, Club House, and the peaceful Tibetan Monastery.' },
            { day: 'Day 3: Solang Valley Snow Point', desc: 'Experience adventure activities like paragliding, zorbing, and quad-biking in the scenic Solang Valley.' },
            { day: 'Day 4: Excursion to Rohtang Pass', desc: 'Witness majestic glaciers and snow peaks at Rohtang Pass (subject to permission) and play in fresh snow.' },
            { day: 'Day 5: Departure', desc: 'Depart Manali with unforgettable memories of the Himalayas.' }
        ]
    },
    {
        id: 'kashmir',
        name: 'Kashmir',
        tag: 'Heaven on Earth',
        category: 'family',
        rating: 4.9,
        reviews: 310,
        price: 19999,
        duration: '6 Days, 5 Nights',
        bestTime: 'March to October',
        included: 'Houseboat Stay, Shikara Ride, Gondola Ride in Gulmarg',
        image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=800&q=80',
        desc: 'Known as the "Heaven on Earth", Kashmir offers spellbinding vistas, pristine lakes, snow-dusted mountains, and the unique experience of luxurious wooden houseboats.',
        itinerary: [
            { day: 'Day 1: Srinagar Arrival & Houseboat', desc: 'Arrive in Srinagar. Check in to a premium Dal Lake houseboat. Enjoy a romantic evening Shikara ride.' },
            { day: 'Day 2: Mughal Gardens & Srinagar City', desc: 'Visit the terraced Shalimar Bagh, Nishat Bagh, and Chashme Shahi, built by Mughal emperors.' },
            { day: 'Day 3: Gulmarg Alpine Beauty', desc: 'Drive to Gulmarg. Take the world\'s highest Gondola cable car ride and witness high alpine meadows.' },
            { day: 'Day 4: Pahalgam - Valley of Shepherds', desc: 'Travel to Pahalgam. Visit Betab Valley, Aru Valley, and walk along the gushing Lidder River.' },
            { day: 'Day 5: Sonamarg Meadows of Gold', desc: 'Excursion to Sonamarg to see breathtaking glaciers. Enjoy a horse-riding trip to the Thajiwas Glacier.' },
            { day: 'Day 6: Bid Adieu', desc: 'Say goodbye to Kashmir and head back to Srinagar airport.' }
        ]
    },
    {
        id: 'ladakh',
        name: 'Ladakh',
        tag: 'Land of High Passes',
        category: 'adventure',
        rating: 4.9,
        reviews: 145,
        price: 24999,
        duration: '7 Days, 6 Nights',
        bestTime: 'May to September',
        included: 'Biking Permits, Camp Stay at Pangong, Leh Palace Entry',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        desc: 'Ladakh is a high-altitude desert featuring dramatic stark mountains, pristine turquoise lakes, Tibetan monasteries, and the highest motorable roads in the world.',
        itinerary: [
            { day: 'Day 1: Leh Arrival & Acclimatization', desc: 'Arrive at Leh airport. Rest completely for the day to adjust to high altitudes.' },
            { day: 'Day 2: Magnetic Hill & Confluence', desc: 'Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and watch the Indus-Zanskar river confluence.' },
            { day: 'Day 3: Leh to Nubra Valley via Khardung La', desc: 'Cross Khardung La (17,582 ft) - the highest motorable road. Take a double-humped camel safari at Hunder Sand Dunes.' },
            { day: 'Day 4: Nubra to Pangong Tso Lake', desc: 'Drive along the Shyok river to the breathtaking Pangong Tso. Check in to premium lakeside camps.' },
            { day: 'Day 5: Pangong back to Leh', desc: 'Capture sunrise over Pangong Lake, then return to Leh crossing Chang La Pass (17,590 ft).' },
            { day: 'Day 6: Leh Monastery Tour', desc: 'Visit Hemis Monastery, Thiksey Monastery, and the majestic Leh Palace.' },
            { day: 'Day 7: Final Departure', desc: 'Transfer to Leh Airport for departure.' }
        ]
    },
    {
        id: 'bali',
        name: 'Bali',
        tag: 'Tropical Island',
        category: 'international',
        rating: 4.8,
        reviews: 420,
        price: 49999,
        duration: '5 Days, 4 Nights',
        bestTime: 'April to October',
        included: 'Private Pool Villa, Ubud Tour, Watersports, Temple Tickets',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        desc: 'Bali is a tropical paradise in Indonesia renowned for its forested volcanic mountains, iconic rice paddies, sandy beaches, and unique cultural temples.',
        itinerary: [
            { day: 'Day 1: Arrival & Villa Welcome', desc: 'Arrive in Bali. Check in to your private pool villa in Seminyak. Spend the night relaxing.' },
            { day: 'Day 2: Ubud Culture & Swing Adventure', desc: 'Visit Tegalalang Rice Terraces, Ubud Monkey Forest, and experience the famous Bali Swing over the canopy.' },
            { day: 'Day 3: Nusa Penida Island Day Trip', desc: 'Take a speed boat to Nusa Penida. Visit Kelingking Cliff Beach, Broken Beach, and snorkel with manta rays.' },
            { day: 'Day 4: Tanah Lot Temple Sunset', desc: 'Visit the iconic sea temple Tanah Lot. Enjoy an evening traditional Kecak Fire Dance performance.' },
            { day: 'Day 5: Departure', desc: 'Enjoy a floating breakfast in your villa pool before checking out and heading to the airport.' }
        ]
    },
    {
        id: 'dubai',
        name: 'Dubai',
        tag: 'Luxury Oasis',
        category: 'international',
        rating: 4.7,
        reviews: 290,
        price: 54999,
        duration: '5 Days, 4 Nights',
        bestTime: 'November to March',
        included: 'Burj Khalifa Top Floor entry, Desert Safari with BBQ, Dhow Cruise',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        desc: 'Dubai is a global city of wonders, boasting futuristic skyscrapers like the Burj Khalifa, massive shopping malls, sand deserts, and ultra-luxurious dining experiences.',
        itinerary: [
            { day: 'Day 1: Welcome to Dubai & Dhow Cruise', desc: 'Arrive in Dubai. Check in to your 5-star hotel. Evening Marina Dhow Cruise with buffet dining.' },
            { day: 'Day 2: Dubai City Tour & Burj Khalifa', desc: 'Explore Dubai Frame, Jumeirah Mosque, Burj Al Arab (photo stop). Ride to the 124th floor of Burj Khalifa.' },
            { day: 'Day 3: Desert Safari Adventure', desc: 'Experience 4x4 dune bashing, camel riding, sandboarding, and a sunset BBQ dinner with belly dance shows.' },
            { day: 'Day 4: Aquaventure Waterpark or Shopping', desc: 'Spend the day at Atlantis Aquaventure Waterpark, or shop at Dubai Mall and watch the fountain show.' },
            { day: 'Day 5: Departure', desc: 'Relax in the morning, do last-minute shopping at the Gold Souk, and transfer to airport.' }
        ]
    },
    {
        id: 'thailand',
        name: 'Thailand',
        tag: 'Exotic Getaway',
        category: 'international',
        rating: 4.6,
        reviews: 350,
        price: 39999,
        duration: '6 Days, 5 Nights',
        bestTime: 'November to April',
        included: 'Phuket Resort, Phi Phi Island Speedboat Tour, Bangkok Temple Tour',
        image: 'https://images.unsplash.com/photo-1528181304800-2f1908c39522?auto=format&fit=crop&w=800&q=80',
        desc: 'Thailand offers a diverse range of experiences from ancient glittering temples and bustling street food markets in Bangkok to pristine island beaches in Phuket and Koh Samui.',
        itinerary: [
            { day: 'Day 1: Phuket Arrival & Beach relaxation', desc: 'Fly into Phuket. Transfer to your beach resort near Patong. Enjoy the evening beach vibes.' },
            { day: 'Day 2: Phi Phi Islands Speedboat Tour', desc: 'Full day excursion to Phi Phi Islands. Visit Maya Bay (from The Beach), snorkel, and relax on white sands.' },
            { day: 'Day 3: James Bond Island Tour', desc: 'Visit Phang Nga Bay and the iconic limestone needle rock seen in James Bond movies.' },
            { day: 'Day 4: Fly to Bangkok & Temple Visits', desc: 'Fly to Bangkok. Visit Wat Pho (Temple of Reclining Buddha) and the majestic Grand Palace.' },
            { day: 'Day 5: Bangkok Shopping & Dinner Cruise', desc: 'Free day for shopping at Siam Paragon and MBK. Evening luxury dinner cruise on the Chao Phraya River.' },
            { day: 'Day 6: Departure', desc: 'Transfer to Bangkok International Airport for your flight back.' }
        ]
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        tag: 'Alpine Luxury',
        category: 'honeymoon',
        rating: 4.9,
        reviews: 215,
        price: 119999,
        duration: '7 Days, 6 Nights',
        bestTime: 'June to September & Dec to Feb',
        included: 'Swiss Travel Pass (1st Class), Mount Titlis Cable Car, Interlaken Hotel',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        desc: 'Switzerland is the epitome of European elegance, offering breathtaking alpine summits, turquoise lakes, medieval towns, and scenic rail journeys.',
        itinerary: [
            { day: 'Day 1: Zurich Arrival & Scenic Train to Lucerne', desc: 'Arrive in Zurich, take a scenic train directly to Lucerne. Walk across Chapel Bridge.' },
            { day: 'Day 2: Mount Titlis Snow Adventure', desc: 'Ride the world\'s first revolving cable car to Mount Titlis. Cross the Cliff Walk suspension bridge.' },
            { day: 'Day 3: Lucerne to Interlaken via GoldenPass Line', desc: 'Board the GoldenPass panoramic train to Interlaken, nestled between two stunning lakes.' },
            { day: 'Day 4: Jungfraujoch - Top of Europe', desc: 'Take a cogwheel train up to Jungfraujoch (11,332 ft). Visit the Ice Palace and Sphinx Observatory.' },
            { day: 'Day 5: Lake Thun Cruise & Zermatt Excursion', desc: 'Enjoy a morning cruise on Lake Thun. Take a train to Zermatt to witness the iconic Matterhorn peak.' },
            { day: 'Day 6: Zurich City Exploration', desc: 'Return to Zurich. Enjoy shopping on Bahnhofstrasse and walk through the historic Altstadt.' },
            { day: 'Day 7: Departure', desc: 'Transfer to Zurich Airport for your outbound flight.' }
        ]
    }
];

// --- Upcoming Trips Data ---
const upcomingTripsData = [
    {
        id: 'trip-kashmir',
        destination: 'Kashmir Magic',
        date: 'June 15, 2026',
        price: 19999,
        seats: 4,
        duration: '6 Days',
        image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=800&q=80',
        status: 'Selling Fast'
    },
    {
        id: 'trip-ladakh',
        destination: 'Ladakh Bike Expedition',
        date: 'July 05, 2026',
        price: 24999,
        seats: 8,
        duration: '7 Days',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        status: 'Limited Seats'
    },
    {
        id: 'trip-bali',
        destination: 'Bali Getaway',
        date: 'August 12, 2026',
        price: 49999,
        seats: 12,
        duration: '5 Days',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        status: 'Open'
    },
    {
        id: 'trip-switzerland',
        destination: 'Alpine Switzerland Luxury',
        date: 'September 20, 2026',
        price: 119999,
        seats: 3,
        duration: '7 Days',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        status: 'Last Call'
    },
    {
        id: 'trip-manali',
        destination: 'Manali Snow Escape',
        date: 'December 18, 2026',
        price: 14999,
        seats: 15,
        duration: '5 Days',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
        status: 'Booking Open'
    },
    {
        id: 'trip-goa',
        destination: 'Goa Christmas Bash',
        date: 'December 23, 2026',
        price: 12499,
        seats: 18,
        duration: '4 Days',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        status: 'Booking Open'
    }
];

// --- Weekend Trips Data ---
const weekendTripsData = [
    {
        id: 'weekend-rishikesh',
        destination: 'Rishikesh Rafting & Camping',
        duration: '2 Days, 1 Night',
        price: 3499,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1596701062351-df5f8a452405?auto=format&fit=crop&w=800&q=80',
        desc: 'Escape the city rush. Riverside camping, beach volleyball, bonfire, and 16km white-water river rafting in the Ganges.'
    },
    {
        id: 'weekend-lonavala',
        destination: 'Lonavala Monsoon Retreat',
        duration: '2 Days, 1 Night',
        price: 4200,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80',
        desc: 'Watch waterfalls cascade down lush green hills. Relax in a mist-covered villa, visiting Tiger\'s Point and Bhaja Caves.'
    },
    {
        id: 'weekend-coorg',
        destination: 'Coorg Coffee Plantation Walk',
        duration: '3 Days, 2 Nights',
        price: 6999,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1598977123418-45f04b615d0e?auto=format&fit=crop&w=800&q=80',
        desc: 'Explore aromatic coffee estates in the "Scotland of India". Homestay experiences, homemade wine tasting, and Abbey Falls.'
    }
];

// --- Global Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Cover Removal
    const loader = document.getElementById('loading-cover');
    if (loader) {
        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
        // Fallback if load event fires before DOMContentLoaded
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // 2. Sticky Header Management
    const header = document.querySelector('.header-nav');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Hamburger Menu Management (Mobile Toggle)
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            // Animate hamburger icon
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu if user clicks outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 4. Scroll To Top Visibility
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 5. Setup Wishlist State Handlers
    setupWishlistListeners();

    // 6. Dynamic Card Loader (Checks current HTML page via ID hooks)
    if (document.getElementById('destinations-page-marker')) {
        initDestinationsPage();
    } else if (document.getElementById('upcoming-trips-page-marker')) {
        initUpcomingTripsPage();
    } else if (document.getElementById('index-page-marker')) {
        initIndexPage();
    }

    // 7. General Modal Listeners & Active Modals Config
    initModals();

    // 8. Contact Form Validator Hook
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        initFormValidation(contactForm, 'contact');
    }

    // 9. Login Form Validator Hook
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        initFormValidation(loginForm, 'login');
    }

    // 10. Signup Form Validator Hook
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        initFormValidation(signupForm, 'signup');
    }

    // 11. Custom Scroll Reveal Action
    initScrollReveal();

    // 12. Setup Newsletter Action
    setupNewsletter();
});

// --- Dynamic Landing Page Init (Index.html) ---
function initIndexPage() {
    // 1. Hot Destinations Grid rendering (Show first 4 or random 4 destinations)
    const hotGrid = document.getElementById('hot-destinations-grid');
    if (hotGrid) {
        const selected = destinationsData.slice(0, 4); // Goa, Manali, Kashmir, Ladakh
        hotGrid.innerHTML = selected.map(dest => createDestinationCardHTML(dest)).join('');
        setupCardActionListeners();
    }

    // 2. Weekend Trips Grid Rendering
    const weekendGrid = document.getElementById('weekend-trips-grid');
    if (weekendGrid) {
        weekendGrid.innerHTML = weekendTripsData.map(trip => createWeekendCardHTML(trip)).join('');
    }

    // 3. Testimonial Slider System
    initTestimonialSlider();

    // 4. Lightbox Gallery System
    initGalleryLightbox();

    // 5. Index Hero Search Bar Form Handler
    const heroSearchForm = document.getElementById('hero-search-form');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = document.getElementById('hero-search-location').value;
            const category = document.getElementById('hero-search-category').value;
            
            // Redirect to destinations page with search parameters
            let url = './destinations.html';
            if (location || category) {
                url += `?search=${encodeURIComponent(location)}&category=${encodeURIComponent(category)}`;
            }
            window.location.href = url;
        });
    }
}

// --- Dynamic Destination Page Init (destinations.html) ---
function initDestinationsPage() {
    const listGrid = document.getElementById('destinations-list-grid');
    const searchBar = document.getElementById('filter-search');
    const categoryFilter = document.getElementById('filter-category');
    const priceSlider = document.getElementById('filter-price');
    const priceValueText = document.getElementById('filter-price-val');
    
    // Parse URL params if redirected from home search
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search') || '';
    const categoryParam = urlParams.get('category') || 'all';

    // Set initial values
    if (searchBar) searchBar.value = searchParam;
    if (categoryFilter) categoryFilter.value = categoryParam;

    function filterAndRender() {
        const keyword = searchBar ? searchBar.value.toLowerCase().trim() : '';
        const selectedCat = categoryFilter ? categoryFilter.value : 'all';
        const maxPrice = priceSlider ? parseInt(priceSlider.value) : 150000;
        
        if (priceValueText) {
            priceValueText.textContent = `₹${maxPrice.toLocaleString('en-IN')}`;
        }

        const filtered = destinationsData.filter(dest => {
            const matchesKeyword = dest.name.toLowerCase().includes(keyword) || 
                                   dest.tag.toLowerCase().includes(keyword) ||
                                   dest.desc.toLowerCase().includes(keyword);
            const matchesCategory = selectedCat === 'all' || dest.category === selectedCat || dest.category === 'all';
            const matchesPrice = dest.price <= maxPrice;
            
            return matchesKeyword && matchesCategory && matchesPrice;
        });

        if (listGrid) {
            if (filtered.length > 0) {
                listGrid.innerHTML = filtered.map(dest => createDestinationCardHTML(dest)).join('');
            } else {
                listGrid.innerHTML = `
                    <div class="no-results">
                        <i class="fa-regular fa-face-frown"></i>
                        <h3>No Destinations Found</h3>
                        <p>We couldn\'t find any packages matching your filters. Try widening your search options.</p>
                    </div>
                `;
            }
            // Bind actions to dynamically loaded cards
            setupCardActionListeners();
            setupWishlistListeners();
        }
    }

    // Set slider listener
    if (priceSlider) {
        priceSlider.addEventListener('input', filterAndRender);
    }
    if (searchBar) {
        searchBar.addEventListener('input', filterAndRender);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndRender);
    }

    // Category pills filter (if present)
    const categoryPills = document.querySelectorAll('.filter-btn-pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            const categoryVal = pill.getAttribute('data-category');
            if (categoryFilter) {
                categoryFilter.value = categoryVal;
                filterAndRender();
            }
        });
    });

    // Run initial filter on load
    filterAndRender();
}

// --- Dynamic Upcoming Trips Page Init (upcoming-trips.html) ---
function initUpcomingTripsPage() {
    const tripsGrid = document.getElementById('upcoming-trips-grid');
    if (tripsGrid) {
        tripsGrid.innerHTML = upcomingTripsData.map(trip => createTripCardHTML(trip)).join('');
        setupTripBookingListeners();
    }
}

// --- Helper Functions to Create Card Layout HTML ---
function createDestinationCardHTML(dest) {
    return `
        <div class="card-destination reveal" id="card-${dest.id}">
            <div class="card-image-wrap">
                <span class="card-tag">${dest.tag}</span>
                <button class="card-wishlist" aria-label="Save to Wishlist" data-dest-id="${dest.id}">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <img src="${dest.image}" alt="${dest.name}">
                <div class="card-image-overlay"></div>
            </div>
            <div class="card-content">
                <div class="card-rating">
                    <i class="fa-solid fa-star"></i>
                    <strong>${dest.rating}</strong>
                    <span>(${dest.reviews} reviews)</span>
                </div>
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-desc">${dest.desc}</p>
                <div class="card-footer">
                    <div class="card-price">
                        <div class="price-label">Starts from</div>
                        <div class="price-amount">₹${dest.price.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="btn btn-primary btn-explore" data-explore-id="${dest.id}">
                        Explore <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createWeekendCardHTML(trip) {
    return `
        <div class="card-destination reveal">
            <div class="card-image-wrap">
                <span class="card-tag">Weekend Escapes</span>
                <img src="${trip.image}" alt="${trip.destination}">
                <div class="card-image-overlay"></div>
            </div>
            <div class="card-content">
                <div class="card-rating" style="margin-bottom: 5px;">
                    <i class="fa-solid fa-star"></i>
                    <strong>${trip.rating}</strong>
                    <span>(4.8)</span>
                </div>
                <h3 class="card-title" style="font-size: 1.25rem; margin-bottom: 5px;">${trip.destination}</h3>
                <p class="card-desc" style="margin-bottom: 15px; font-size: 0.85rem;">${trip.desc}</p>
                <div class="card-footer">
                    <div class="card-price">
                        <div class="price-label">Duration: ${trip.duration}</div>
                        <div class="price-amount" style="font-size: 1.1rem;">₹${trip.price.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="btn btn-secondary btn-book-trip" data-trip-title="${trip.destination}" data-trip-price="${trip.price}">
                        Book Escape
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createTripCardHTML(trip) {
    return `
        <div class="card-trip reveal">
            <div class="card-image-wrap" style="height: 200px;">
                <span class="card-tag" style="background-color: var(--black); color: var(--primary); border: 1px solid var(--glass-border);">${trip.status}</span>
                <img src="${trip.image}" alt="${trip.destination}">
                <div class="card-image-overlay"></div>
                <div class="trip-meta-overlay">
                    <span class="trip-badge"><i class="fa-regular fa-calendar"></i> ${trip.date}</span>
                </div>
            </div>
            <div class="card-content" style="padding: 20px;">
                <h3 class="card-title" style="font-size: 1.3rem; margin-bottom: 15px;">${trip.destination}</h3>
                
                <div class="trip-stats">
                    <div class="trip-stat-item">
                        <i class="fa-regular fa-clock"></i>
                        <span>Duration</span>
                        <strong>${trip.duration}</strong>
                    </div>
                    <div class="trip-stat-item">
                        <i class="fa-solid fa-user-group"></i>
                        <span>Seats Left</span>
                        <strong class="text-gold">${trip.seats} seats</strong>
                    </div>
                    <div class="trip-stat-item">
                        <i class="fa-solid fa-route"></i>
                        <span>Type</span>
                        <strong>Guided Group</strong>
                    </div>
                </div>

                <div class="card-footer" style="border: none; padding: 0;">
                    <div class="card-price">
                        <div class="price-label">Price per head</div>
                        <div class="price-amount">₹${trip.price.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="btn btn-primary btn-book-trip" data-trip-title="${trip.destination}" data-trip-price="${trip.price}">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- Active Wishlist Management ---
function setupWishlistListeners() {
    const buttons = document.querySelectorAll('.card-wishlist');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
            const destId = btn.getAttribute('data-dest-id');
            const dest = destinationsData.find(d => d.id === destId);
            const isAdded = btn.classList.contains('active');
            
            if (icon = btn.querySelector('i')) {
                if (isAdded) {
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                    showToast(`Added ${dest ? dest.name : 'Destination'} to your wishlist!`, 'success');
                } else {
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                    showToast(`Removed ${dest ? dest.name : 'Destination'} from wishlist.`, 'info');
                }
            }
        });
    });
}

// --- Core Modals Functionality ---
function initModals() {
    const exploreModal = document.getElementById('explore-modal');
    const bookingModal = document.getElementById('booking-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    // Attach click exits
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Setup interactive tabs inside explore modal
    const tabs = document.querySelectorAll('.modal-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetPane = tab.getAttribute('data-tab');
            const panes = document.querySelectorAll('.tab-pane');
            panes.forEach(pane => pane.classList.remove('active'));
            
            const target = document.getElementById(targetPane);
            if (target) {
                target.classList.add('active');
            }
        });
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
}

// --- Set Explore Modal Contents & Open ---
function openExploreModal(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest) return;

    const modal = document.getElementById('explore-modal');
    if (!modal) return;

    // Load static data
    document.getElementById('explore-modal-img').src = dest.image;
    document.getElementById('explore-modal-title').textContent = dest.name;
    document.getElementById('explore-modal-rating').innerHTML = `
        <i class="fa-solid fa-star"></i> <strong>${dest.rating}</strong> (${dest.reviews} reviews)
    `;
    document.getElementById('explore-modal-price').textContent = `₹${dest.price.toLocaleString('en-IN')}`;
    document.getElementById('explore-modal-duration').textContent = dest.duration;
    document.getElementById('explore-modal-time').textContent = dest.bestTime;
    document.getElementById('explore-modal-included').textContent = dest.included;
    document.getElementById('explore-modal-desc').textContent = dest.desc;

    // Load Itinerary Details
    const itineraryWrap = document.getElementById('explore-modal-itinerary');
    if (itineraryWrap) {
        itineraryWrap.innerHTML = dest.itinerary.map(item => `
            <div class="itinerary-day">
                <h4>${item.day}</h4>
                <p>${item.desc}</p>
            </div>
        `).join('');
    }

    // Set Default Tab
    const firstTab = modal.querySelector('.modal-tab');
    if (firstTab) firstTab.click();

    // Map the booking activation button within the Explore Modal
    const modalBookBtn = document.getElementById('explore-modal-book-btn');
    if (modalBookBtn) {
        modalBookBtn.setAttribute('data-trip-title', dest.name);
        modalBookBtn.setAttribute('data-trip-price', dest.price);
        modalBookBtn.onclick = () => {
            closeAllModals();
            setTimeout(() => {
                openBookingModal(dest.name, dest.price);
            }, 300);
        };
    }

    // Launch Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// --- Set Booking Modal Contents & Open ---
function openBookingModal(tripTitle, tripPrice) {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;

    // Set static values
    document.getElementById('booking-modal-title').textContent = tripTitle;
    document.getElementById('booking-modal-rate').textContent = `₹${parseInt(tripPrice).toLocaleString('en-IN')}`;

    const numTicketsInput = document.getElementById('booking-num-tickets');
    const totalBox = document.getElementById('booking-total-cost');
    
    // Set dynamic calculator
    function recalculateTotal() {
        const qty = parseInt(numTicketsInput.value) || 1;
        const total = qty * parseInt(tripPrice);
        totalBox.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    if (numTicketsInput) {
        numTicketsInput.value = 1;
        numTicketsInput.oninput = recalculateTotal;
    }
    recalculateTotal();

    // Reset Form fields
    const form = document.getElementById('booking-form');
    if (form) {
        form.reset();
        
        // Setup Form submission handler
        form.onsubmit = (e) => {
            e.preventDefault();
            
            // Simple validation check
            const name = document.getElementById('booking-name').value.trim();
            const email = document.getElementById('booking-email').value.trim();
            const phone = document.getElementById('booking-phone').value.trim();
            const date = document.getElementById('booking-date').value;

            if (!name || !email || !phone || !date) {
                showToast('Please fill out all booking fields.', 'error');
                return;
            }

            closeAllModals();
            setTimeout(() => {
                showToast(`Congratulations! Your booking for ${tripTitle} was successful. Details sent to ${email}`, 'success');
            }, 400);
        };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// --- Card Explore Buttons Bind ---
function setupCardActionListeners() {
    const exploreButtons = document.querySelectorAll('.btn-explore');
    exploreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const exploreId = btn.getAttribute('data-explore-id');
            openExploreModal(exploreId);
        });
    });
}

// --- Booking Buttons Bind ---
function setupTripBookingListeners() {
    const bookingButtons = document.querySelectorAll('.btn-book-trip');
    bookingButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const title = btn.getAttribute('data-trip-title');
            const price = btn.getAttribute('data-trip-price');
            openBookingModal(title, price);
        });
    });
}

// Handle Escapes booked from card grids on home or destinations
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn-book-trip')) {
        const title = e.target.getAttribute('data-trip-title');
        const price = e.target.getAttribute('data-trip-price');
        openBookingModal(title, price);
    }
});

// --- Testimonial Slider Carousels ---
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    
    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval;

    // Create Navigation Dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        if (dots[currentIndex]) dots[currentIndex].classList.remove('active');
        
        currentIndex = (index + slides.length) % slides.length;
        
        slides[currentIndex].classList.add('active');
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    // Auto sliding triggers
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}

// --- Lightbox Gallery Viewer ---
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    
    if (!lightbox || galleryItems.length === 0) return;

    let galleryImages = [];
    let currentImgIndex = 0;

    // Populate local cache of gallery paths
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-hover-overlay span').textContent;
        galleryImages.push({ src: img.src, caption: caption });
        
        item.addEventListener('click', () => {
            currentImgIndex = index;
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        const item = galleryImages[index];
        lightboxImg.src = item.src;
        lightboxCap.textContent = item.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Arrow Navs inside lightbox
    const arrowLeft = document.getElementById('lightbox-prev');
    const arrowRight = document.getElementById('lightbox-next');

    function showNext() {
        currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
        openLightbox(currentImgIndex);
    }

    function showPrev() {
        currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentImgIndex);
    }

    if (arrowRight) arrowRight.addEventListener('click', showNext);
    if (arrowLeft) arrowLeft.addEventListener('click', showPrev);

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'Escape') closeLightbox();
    });
}

// --- Custom Toast Notifications ---
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';

    toast.innerHTML = `
        <span class="toast-icon"><i class="${iconClass}"></i></span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto dismiss
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 4000);
}

// --- Form Validation Framework ---
function initFormValidation(formElement, type) {
    const inputs = formElement.querySelectorAll('.form-input-control');

    // Enable dynamic validations on blur
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        input.addEventListener('input', () => {
            const group = input.closest('.form-input-group');
            if (group && group.classList.contains('invalid')) {
                validateInput(input); // Clear errors dynamically once user corrects
            }
        });
    });

    // Special validation overrides for specific pages
    if (type === 'signup') {
        const pwdInput = document.getElementById('signup-pwd');
        if (pwdInput) {
            pwdInput.addEventListener('input', () => {
                checkPasswordStrength(pwdInput.value);
            });
        }
    }

    // Bind Show/Hide Toggle buttons
    const passToggles = formElement.querySelectorAll('.password-toggle');
    passToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const inputField = toggle.closest('.form-input-group').querySelector('.form-input-control');
            if (inputField.type === 'password') {
                inputField.type = 'text';
                toggle.classList.remove('fa-eye');
                toggle.classList.add('fa-eye-slash');
            } else {
                inputField.type = 'password';
                toggle.classList.remove('fa-eye-slash');
                toggle.classList.add('fa-eye');
            }
        });
    });

    // Full form submit validator
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (type === 'signup') {
            const pwd = document.getElementById('signup-pwd').value;
            const confirmPwd = document.getElementById('signup-confirm-pwd').value;
            const confirmInput = document.getElementById('signup-confirm-pwd');
            
            if (pwd !== confirmPwd) {
                const group = confirmInput.closest('.form-input-group');
                group.classList.add('invalid');
                const errText = group.querySelector('.form-input-error');
                errText.textContent = 'Passwords do not match.';
                isFormValid = false;
            }
        }

        if (!isFormValid) {
            showToast('Please correct validation errors first.', 'error');
            return;
        }

        // Output Success redirects
        if (type === 'contact') {
            showToast('Thank you for contacting us! We will get back to you within 24 hours.', 'success');
            formElement.reset();
        } else if (type === 'login') {
            const email = document.getElementById('login-email').value;
            showToast(`Welcome back! Successfully logged in.`, 'success');
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1000);
        } else if (type === 'signup') {
            showToast(`Registration Successful! Welcome to TravelNook.`, 'success');
            setTimeout(() => {
                window.location.href = './login.html';
            }, 1000);
        }
    });
}

function validateInput(input) {
    const group = input.closest('.form-input-group');
    if (!group) return true;

    const value = input.value.trim();
    const errorMsg = group.querySelector('.form-input-error');
    let isValid = true;
    let message = '';

    // Required check
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
        message = 'This field is required.';
    } 
    // Type specific checks
    else if (value !== '') {
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Enter a valid email address.';
            }
        } else if (input.id === 'contact-phone' || input.id === 'booking-phone') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value.replace(/[-+ ]/g, ''))) {
                isValid = false;
                message = 'Enter a valid 10-digit phone number.';
            }
        } else if (input.type === 'password' && input.id !== 'signup-confirm-pwd') {
            if (value.length < 6) {
                isValid = false;
                message = 'Password must be at least 6 characters.';
            }
        }
    }

    if (!isValid) {
        group.classList.add('invalid');
        if (errorMsg) errorMsg.textContent = message;
    } else {
        group.classList.remove('invalid');
    }

    return isValid;
}

// --- Password Strength Evaluator ---
function checkPasswordStrength(password) {
    const bar = document.getElementById('strength-bar');
    const text = document.getElementById('strength-text');
    
    if (!bar || !text) return;

    if (password === '') {
        bar.className = 'password-strength-bar';
        text.textContent = '';
        return;
    }

    let score = 0;

    // Score metrics
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Update classes and strength messaging
    bar.className = 'password-strength-bar';
    if (score <= 2) {
        bar.classList.add('strength-weak');
        text.textContent = 'Weak Password';
        text.style.color = 'var(--error)';
    } else if (score <= 4) {
        bar.classList.add('strength-medium');
        text.textContent = 'Medium Strength';
        text.style.color = 'var(--primary)';
    } else {
        bar.classList.add('strength-strong');
        text.textContent = 'Strong Password';
        text.style.color = 'var(--success)';
    }
}

// --- Custom Scroll Reveal Helper ---
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    // Initial call to reveal elements already in view
    setTimeout(checkReveal, 200);
}

// --- Newsletter Subscription Bind ---
function setupNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const email = input ? input.value.trim() : '';

            if (email) {
                showToast(`Thank you! ${email} has been subscribed to TravelNook newsletters.`, 'success');
                form.reset();
            } else {
                showToast('Please enter a valid email.', 'error');
            }
        });
    });
}
