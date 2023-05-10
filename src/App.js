// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
// import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import ContactUs from "./components/ContactUs";

// COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="bg-orange-100">
      <BrowserRouter>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/groceries/:id/edit" element={<Edit />} />
            <Route path="/groceries/new" element={<New />} />
            {/* <Route path="/songs/:id" element={<Show />} /> */}
            <Route path="/groceries" element={<Index />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
