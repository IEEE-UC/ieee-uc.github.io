export interface CalendarEvent {
    id: string;
    title: string;
    date: Date;
    description?: string;
}

export interface ClubEvent {
    id: string;
    name: string;
    date: Date;
    location: string;
    details?: string;
}

export interface RosterMember {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface Roster {
    members: RosterMember[];
}