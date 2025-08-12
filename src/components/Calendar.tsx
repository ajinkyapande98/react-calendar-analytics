import { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { CalendarEvent } from '../types/calendar';
import DataChart from './DataChart';

const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const calendarData = useSelector((state: RootState) => state.calendar);

    const events: CalendarEvent[] = Object.entries(calendarData).map(([dateStr, data]) => {
        const [day, month, year] = dateStr.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return {
            title: `${data.length} entries`,
            start: date,
            end: date,
            data: data,
        };
    });

    const handleSelectEvent = (event: CalendarEvent) => {
        setSelectedDate(event.start);
    };

    const selectedData = selectedDate
        ? calendarData[format(selectedDate, 'dd-MM-yyyy')]
        : null;

    return (
        <div className="calendar-container">
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
            />
            {selectedDate && selectedData ? (
                <div className="chart-popup">
                    <h3>Data for {format(selectedDate, 'dd-MM-yyyy')}</h3>
                    <DataChart data={selectedData} />
                </div>
            ) : selectedDate && (
                <div className="no-data">
                    No data found for the selected date.
                </div>
            )}
        </div>
    );
};

export default CalendarView;
