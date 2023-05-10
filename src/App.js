// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
// import Index from "./pages/Index";
import New from "./pages/New";
// import Show from "./pages/Show";
// import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import ContactUs from "./components/ContactUs";

// COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="bg-orange-100">
      <BrowserRouter>
        <DarkMode>
          <Header />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/developers" element={<Developers />} />

              {/* <Route path="/budgets/:index/edit" element={<Edit />} /> */}
              <Route path="/groceries/new" element={<New />} />
              {/* <Route path="/budgets/:index" element={<Show />} /> */}
              {/* <Route path="/budgets" element={<Index />} /> */}
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
          <Footer />
        </DarkMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
