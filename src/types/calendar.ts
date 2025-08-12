export interface UserData {
    [key: string]: number;
}

export interface CalendarData {
    [date: string]: UserData[];
}

export interface CalendarEvent {
    title: string;
    start: Date;
    end: Date;
    data: UserData[];
}
