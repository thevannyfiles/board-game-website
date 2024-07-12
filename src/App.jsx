import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourstory from "./pages/ourstory.jsx";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/about" element={<Ourstory />} />
        </Routes>
      </Router>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default App;
