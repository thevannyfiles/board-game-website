import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourstory from "./pages/ourstory.jsx";
import Menu from "./pages/menu.jsx";
import Header from "./Components/Header.jsx";
<<<<<<< HEAD
import Ourstory from "./pages/ourstory.jsx"; 


=======
import PlayPage from "./pages/play.jsx";
import Home from "./pages/home.jsx";
>>>>>>> faf462e4ad2b956aad9872364ee8c10ce7e3d15f

function App() {
  return (
    <>
<<<<<<< HEAD
      <div>
        <Header />
        <Ourstory />
      </div>
=======
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/about" element={<Ourstory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/experience" element={<Ourstory />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
>>>>>>> faf462e4ad2b956aad9872364ee8c10ce7e3d15f
    </>
  );
}

export default App;
