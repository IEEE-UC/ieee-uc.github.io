import { Request, Response } from 'express';

export default class EventsController {
    private events: Array<{ id: number; name: string; date: string }> = [];

    public listEvents(req: Request, res: Response): void {
        res.json(this.events);
    }

    public addEvent(req: Request, res: Response): void {
        const { name, date } = req.body;
        const newEvent = { id: this.events.length + 1, name, date };
        this.events.push(newEvent);
        res.status(201).json(newEvent);
    }

    public deleteEvent(req: Request, res: Response): void {
        const { id } = req.params;
        this.events = this.events.filter(event => event.id !== parseInt(id));
        res.status(204).send();
    }
}