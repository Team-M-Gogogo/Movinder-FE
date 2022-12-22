import "./App.css";
import "./features/Navbar/Navbar.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ForumPage from "./pages/ForumPage";
import DisplayTickets from "./features/tickets/DisplayTicket";
import PaymentPage from "./pages/PaymentPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/cinema" element={<CinemaListpage/>}/> */}
          <Route path="/chooseCinema/:movieId" element={<CinemaListpage/>}/>
          <Route path="/createBooking/:movieId/:cinemaId/:sessionId" element={<BookingPage/>}/>
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/forum/:movieId" element={<ForumPage/>}/>
          <Route path="/ticket" element={<DisplayTickets />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
