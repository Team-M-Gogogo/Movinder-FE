import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CinemaListpage from "./pages/CinemaListPage";
import SessionListPage from "./pages/SessionListPage";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/cinemaList" element={<CinemaListpage/>}/>
          <Route path="/sessionList" element={<SessionListPage/>}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
