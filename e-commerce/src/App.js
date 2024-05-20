import "./App.css";
import Signinandup from "./Component/Signinandup";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Details from "./Component/Details";
import Maincontainer from "./Component/Maincontainer";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Details2 from "./Component/Details2";
import Payment from "./Component/Format.jsx/Payment";
import Payment2 from "./Component/Format.jsx/Payment2";
import Contactpage from "./Component/Contactpage";
import Navmiddle from "./Component/compo/Navmiddle";
import About from "./Component/About";
import Footer from "./Component/compo/Footer";
import Cartpage from "./Component/compo/Cartpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navmiddle />
      <Routes>
        <Route path="/" element={<Maincontainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details2/:id" element={<Details2 />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/payment2/:id" element={<Payment2 />} />
        <Route path="/maincontainer" element={<Maincontainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
