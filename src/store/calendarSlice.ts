import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CalendarData } from '../types/calendar';
import { format } from 'date-fns';

// Sample data
const initialState: CalendarData = {
  "01-09-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 },
  ],
  "02-09-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 },
  ],
  "03-09-2025": [
    { "user_1": 4 },
    { "user_2": 3 },
    { "user_3": 2 },
    { "user_4": 1 },
  ],
  "04-09-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 },
  ]
}



const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<{ date: Date; data: { [key: string]: number } }>) => {
            const dateKey = format(action.payload.date, 'dd-MM-yyyy');
            if (!state[dateKey]) {
                state[dateKey] = [];
            }
            state[dateKey].push(action.payload.data);
        },
    },
});

export const { addData } = calendarSlice.actions;
export default calendarSlice.reducer;
