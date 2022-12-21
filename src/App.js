import "./App.css";
import "./features/Navbar/Navbar.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import LoginPage from "./pages/LoginPage";
import {Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import DisplayTickets from "./features/Booking/DisplayTicket";
import PaymentPage from "./pages/PaymentPage";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          {/* <Route path="/cinema" element={<CinemaListpage/>}/> */}
          <Route path="/:movieId" element={<CinemaListpage/>}/>
          <Route path="/:movieId/:cinemaId/:sessionId" element={<BookingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/ticket" element={<DisplayTickets></DisplayTickets>}/> #temp test
          <Route path="/payment" element={<PaymentPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
