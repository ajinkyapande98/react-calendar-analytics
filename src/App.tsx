import { Provider } from 'react-redux'
import { store } from './store/store'
import CalendarView from './components/Calendar'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Calendar Analytics</h1>
        <CalendarView />
      </div>
    </Provider>
  )
}

export default App
