import "./App.css";
import Signinandup from "./Component/Signinandup";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Details from "./Component/Details";
import Maincontainer from "./Component/Maincontainer";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Details2 from "./Component/Details2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincontainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details2/:id" element={<Details2 />} />

        <Route path="/maincontainer" element={<Maincontainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
