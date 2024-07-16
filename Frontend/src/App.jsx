import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import CreatePass from './passengers/CreatePass'
import Home from './Home'
import ReadPass from './passengers/ReadPass'
import CreateFlight from './airport/CreateFlight'
import ReadFlight from './airport/ReadFlight'
import CreateBooking from './airport/CreateBooking'
import ReadBookings from './airport/ReadBooking'
import CreateTicket from './airport/CreatingTicekts'
import ReadTickets from './airport/ReadTickets'
import ReadAircraft from './airport/ReadAircraft'
import Select from './Select'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/createPass' element={<CreatePass></CreatePass>}></Route>
      <Route path='/readPass' element={<ReadPass></ReadPass>}></Route>
      <Route path='/createFlight' element={<CreateFlight></CreateFlight>}></Route>
      <Route path='/readFlight' element={<ReadFlight></ReadFlight>}></Route>
      <Route path='/ReadTickets' element={<ReadTickets></ReadTickets>}></Route>
      <Route path='/CreateBooking' element={<CreateBooking></CreateBooking>}></Route>
      <Route path='/ReadBookings' element={<ReadBookings></ReadBookings>}></Route>
      <Route path='/CreateTicket' element={<CreateTicket></CreateTicket>}></Route>
      <Route path='/ReadAircraft' element={<ReadAircraft></ReadAircraft>}></Route>
      <Route path='/select/:id' element={<Select></Select>}></Route>
    </Routes>
    </BrowserRouter>
)
}

export default App
