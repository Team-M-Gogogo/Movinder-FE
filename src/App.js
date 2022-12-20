import "./App.css";
import "./features/Navbar/Navbar.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import LoginPage from "./pages/LoginPage";
import {Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          {/* <Route path="/cinema" element={<CinemaListpage/>}/> */}
          <Route path="/:movieId" element={<CinemaListpage/>}/>
          <Route path="/:movieId/:sessionId" element={<BookingPage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
