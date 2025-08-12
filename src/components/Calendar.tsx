import { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { CalendarEvent } from '../types/calendar';
import DataChart from './DataChart';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

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

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '1000px',
        width: '90%',
        backgroundColor: 'white',
        border: 'none',
        overflow: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    },
};

const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        setIsModalOpen(true);
    };

    const handleSelectSlot = ({ start }: { start: Date }) => {
        setSelectedDate(start);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                onSelectSlot={handleSelectSlot}
                selectable={true}
                views={['month']}
                defaultView="month"
            />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Date Data Modal"
            >
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>×</button>
                    {selectedDate && (
                        <h3>Data for {format(selectedDate, 'dd-MM-yyyy')}</h3>
                    )}
                    {selectedData ? (
                        <DataChart data={selectedData} />
                    ) : (
                        <div className="no-data">
                            No data found for the selected date.
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default CalendarView;
