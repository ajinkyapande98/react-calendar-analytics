<img width="1178" height="653" alt="Screenshot from 2025-08-12 18-25-39" src="https://github.com/user-attachments/assets/150d8743-7d6d-42b7-b986-d9fc8cd188c2" /># React Calendar Analytics

A React application that displays user data in a calendar view with interactive bar charts. Built with React, TypeScript, Redux Toolkit, React Big Calendar, and Recharts.

## Features

- Calendar view with date, week, and month-wise data display
- Interactive date selection with highlighted dates containing data
- Popup bar graphs showing user data for selected dates
- Warning messages for dates without data
- Redux state management for data handling
- Responsive design that works across different operating systems

## Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:ajinkyapande98/react-calendar-analytics.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-calendar-analytics
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5174` (or another port if 5174 is in use).

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/store` - Redux store and slices
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions

## Data Format

The application expects data in the following format:

```typescript
{
    "01-09-2025": [
        {"user_1": 1},
        {"user_2": 2},
        {"user_3": 3},
        {"user_4": 4}
    ],
    // ... more dates
}
```

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- React Big Calendar
- Recharts
- Vite
- date-fns

## Contributing

1. Make your first commit when you start working on the task
2. Make regular commits during development (at least 5 different commits)
3. Make your final commit when you complete the task

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint



## Screenshot

<img width="1178" height="653" alt="Screenshot from 2025-08-12 18-25-39" src="https://github.com/user-attachments/assets/ca3b87cd-15bb-4d5d-be5a-e52b5a22cc63" />
<img width="1159" height="715" alt="Screenshot from 2025-08-12 18-25-50" src="https://github.com/user-attachments/assets/1e09b037-1466-4573-89b7-19d2faf6b3a4" />


