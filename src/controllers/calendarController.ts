export default class CalendarController {
    private calendarEvents: Array<{ id: number; title: string; date: string }> = [];

    public getEvents(req: any, res: any) {
        res.json(this.calendarEvents);
    }

    public addEvent(req: any, res: any) {
        const { title, date } = req.body;
        const newEvent = { id: this.calendarEvents.length + 1, title, date };
        this.calendarEvents.push(newEvent);
        res.status(201).json(newEvent);
    }

    public updateEvent(req: any, res: any) {
        const { id } = req.params;
        const { title, date } = req.body;
        const eventIndex = this.calendarEvents.findIndex(event => event.id === parseInt(id));

        if (eventIndex !== -1) {
            this.calendarEvents[eventIndex] = { id: parseInt(id), title, date };
            res.json(this.calendarEvents[eventIndex]);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    }

    public deleteEvent(req: any, res: any) {
        const { id } = req.params;
        const eventIndex = this.calendarEvents.findIndex(event => event.id === parseInt(id));

        if (eventIndex !== -1) {
            this.calendarEvents.splice(eventIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    }
}