import { Router } from 'express';
import calendarRoutes from './api/calendarRoutes';
import eventsRoutes from './api/eventsRoutes';
import rosterRoutes from './api/rosterRoutes';

const router = Router();

// Public routes
router.use('/calendar', calendarRoutes);
router.use('/events', eventsRoutes);
router.use('/roster', rosterRoutes);

// Admin routes (to be defined later)
router.use('/admin/calendar', calendarRoutes);
router.use('/admin/events', eventsRoutes);
router.use('/admin/roster', rosterRoutes);

export default router;