import express from 'express';

const router = express.Router();

// Public route to get club information
router.get('/info', (req, res) => {
    res.json({
        name: 'Club Name',
        description: 'This is a club website where you can find information about our activities and events.',
        contact: 'contact@clubname.com'
    });
});

// Public route to get events
router.get('/events', (req, res) => {
    // Here you would typically fetch events from the database
    res.json([
        { id: 1, title: 'Event 1', date: '2023-10-01' },
        { id: 2, title: 'Event 2', date: '2023-10-15' }
    ]);
});

// Public route to get membership information
router.get('/membership', (req, res) => {
    res.json({
        message: 'Join our club to enjoy exclusive benefits and participate in events!'
    });
});

export default router;