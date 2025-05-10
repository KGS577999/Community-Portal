// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home')
});

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

router.get('/events', (req, res) => {
    res.render('pages/events')
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.get('/thankyou', (req, res) => {
    res.render('pages/contact')
});

module.exports = router;
