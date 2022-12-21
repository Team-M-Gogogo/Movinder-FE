import "./App.css";
import "./features/Navbar/Navbar.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import {Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          {/* <Route path="/cinema" element={<CinemaListpage/>}/> */}
          <Route path="/:movieId" element={<CinemaListpage/>}/>
          <Route path="/:movieId/:cinemaId/:sessionId" element={<BookingPage/>}/>
          <Route path="/userprofile" element={<UserProfilePage/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
