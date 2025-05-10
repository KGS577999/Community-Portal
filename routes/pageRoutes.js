// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home')
});

router.get('/about', (req, res) => {
    const team = [
        {name: 'Kyle', surname: 'Smith', bio: 'Mini Biography 1', image: '/images/pfp1.png'},
        {name: 'Tiaan', surname: 'Dorfling', bio: 'Mini Biography 2', image: '/images/pfp2.png'},
        {name: 'Gabriel', surname: 'Botha', bio: 'Mini Biography 3', image: '/images/pfp1.png'},
        {name: 'Emile', surname: 'Pieterse', bio: 'Mini Biography 4', image: '/images/pfp2.png'}
    ]

    const orgBio = {
        info: 'Our community portal is dedicated to keeping residents informed and engaged with the latest local events, gatherings, and activities. Whether its gaming tournaments, charity fundraisers, cultural festivals, or neighborhood meetups, we serve as the go-to hub for discovering whats happening nearby. We aim to bring people together, foster connections, and celebrate the diverse interests that make our community vibrant. Stay updated, get involved, and be part of the experiences that make our town thrive!'
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
