import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
