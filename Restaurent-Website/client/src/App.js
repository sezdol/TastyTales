import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Account from "./components/Account/Account";
import theme from "./styles/Theme"
import Success from "./components/Account/Success";
import Cancel from "./components/Account/Cancel";

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
