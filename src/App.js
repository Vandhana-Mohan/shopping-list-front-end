// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import ContactUs from "./components/ContactUs";

// COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import FilterCategory from "./components/FilterCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/groceries/:id/edit" element={<Edit />} />
            <Route path="/groceries/new" element={<New />} />
            <Route path="/groceries/:id" element={<Show />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
