import "./App.css";
import Signinandup from "./Component/Signinandup";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signinandup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
