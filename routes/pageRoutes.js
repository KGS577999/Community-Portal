// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Placeholder events array for home page
const events = [
    { title: "Music Festival", date: "2025-05-12", location: "City Park", image: "images/music-festival.jpg" },
    { title: "Tech Conference", date: "2025-05-20", location: "Convention Center", image: "images/tech-conference.png" },
    { title: "Food Market", date: "2025-05-14", location: "Downtown", image: "images/food-market.png" },
    { title: "Gaming Tournament", date: "2025-05-15", location: "Esports Arena", image: "images/gaming-tournament.png" },
    { title: "Charity Fundraiser Gala", date: "2025-05-17", location: "Grand Hotel Ballroom", image: "images/gala.png" },
    { title: "Neighborhood Meetup", date: "2025-05-16", location: "Community Center", image: "meetup.jpg" },
    { title: "Cultural Festival", date: "2025-05-18", location: "Central Plaza", image: "culture.jpg" },
    { title: "Outdoor Movie Night", date: "2025-05-13", location: "Riverside Park", image: "movie.jpg" },
    { title: "Startup Pitch Event", date: "2025-05-19", location: "Innovation Hub", image: "startup.jpg" },
    { title: "Art Exhibition", date: "2025-05-21", location: "Modern Art Museum", image: "art.jpg" },
    { title: "Sports Marathon", date: "2025-05-11", location: "City Stadium", image: "marathon.jpg" }
];

let users = [];


// Home Page
router.get('/', (req, res) => {

    // Gets Todays Date
    const today = new Date();

    // Gets the date one week from now
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(today.getDate() + 7);

    // Filters out the events array; only collecting the events happening within a week from today
    const upcomingEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= oneWeekFromNow;
    });

    // Sorts the new array by date
    const sortedUpcomingEvents = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Data being sent to page to display
    const homeData = {
        eventsTitle: "Upcoming Events",

        welcomeMessage: "Welcome to your Local Community Hub, your go-to place for staying connected with everything happening in our vibrant community! Whether you're looking to discover exciting events, meet new people, or take part in meaningful initiatives, we've got you covered. Join us in building friendships, celebrating diverse interests, and making a real impact together. Stay updated, get involved, and be part of the experiences that make our community thrive!",

        sortedUpcomingEvents
    }

    res.render('pages/home', {homeData})
});

// About Page
router.get('/about', (req, res) => {
    const team = [
        {name: 'Kyle', surname: 'Smith', bio: 'Kyle is passionate about the gaming community and oversees all gaming tournaments. He organizes events, manages registrations, and ensures fair play across all competitions.', image: '/images/pfp1.png'},
        {name: 'Tiaan', surname: 'Dorfling', bio: 'Tiaan leads our charity fundraising efforts. He connects with local causes, coordinates events, and ensures that every initiative makes a meaningful impact on the community.', image: '/images/pfp2.png'},
        {name: 'Gabriel', surname: 'Botha', bio: 'Gabriel brings people together through cultural festivals. He curates diverse programs that celebrate traditions, music, art, and cuisine from different cultures.', image: '/images/pfp1.png'},
        {name: 'Emile', surname: 'Pieterse', bio: 'Emile focuses on strengthening community bonds by organizing neighborhood meetups. His events foster connection, support local talent, and encourage inclusive dialogue.', image: '/images/pfp2.png'}
    ]

    const orgBio = {
        info: 'Our community portal is dedicated to keeping residents informed and engaged with the latest local events, gatherings, and activities. Whether its gaming tournaments, charity fundraisers, cultural festivals, or neighborhood meetups, we serve as the go-to hub for discovering what is happening nearby. We aim to bring people together, foster connections, and celebrate the diverse interests that make our community vibrant. Stay updated, get involved, and be part of the experiences that makes our community thrive!'
        }

    res.render('pages/about', {team, orgBio})
});

// Events Page
router.get('/events', (req, res) => {
    res.render('pages/events', {events: events})
});

// Contact Page
router.get('/contact', (req, res) => {
    res.render('pages/contact');
});
router.post('/contact', urlencodedParser, (req,res) => {
    users.push(req.body);
    res.render('pages/thankyou', { data: req.body });
    users.forEach(function(user) {
    console.log(user.name);
    });
});

module.exports = router;
