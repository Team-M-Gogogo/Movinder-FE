import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import {Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/cinemaList" element={<CinemaListpage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
