import { Request, Response } from 'express';

export default class RosterController {
    private roster: Array<{ id: number; name: string; email: string }> = [];

    public getRoster(req: Request, res: Response): void {
        res.json(this.roster);
    }

    public addMember(req: Request, res: Response): void {
        const { id, name, email } = req.body;
        this.roster.push({ id, name, email });
        res.status(201).json({ message: 'Member added', member: { id, name, email } });
    }

    public removeMember(req: Request, res: Response): void {
        const { id } = req.params;
        this.roster = this.roster.filter(member => member.id !== parseInt(id));
        res.json({ message: 'Member removed' });
    }
}