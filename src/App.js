import "./App.css";
import "./features/Navbar/Navbar.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import LoginPage from "./pages/LoginPage";
import {Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ForumPage from "./pages/ForumPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          {/* <Route path="/cinema" element={<CinemaListpage/>}/> */}
          <Route path="/chooseCinema/:movieId" element={<CinemaListpage/>}/>
          <Route path="/createBooking/:movieId/:cinemaId/:sessionId" element={<BookingPage/>}/>
          <Route path="/forum/:movieId" element={<ForumPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
