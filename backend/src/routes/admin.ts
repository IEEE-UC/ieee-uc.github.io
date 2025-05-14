import express from 'express';
import { check, ValidationError, validationResult } from 'express-validator';
import { authenticateUser } from '../utils/auth';
import { Request } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        session?: Record<string, any>;
    }
}

const router = express.Router();

router.post('/signin', [
    check('username').notEmpty().withMessage('Username is required'),
    check('password').notEmpty().withMessage('Password is required')
], async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const user = await authenticateUser(username, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Here you would typically set a session or a JWT token
        req.session = req.session ?? {};
        req.session.user = user; // Example for session-based auth
        return res.status(200).json({ message: 'Sign in successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
});

export default router;