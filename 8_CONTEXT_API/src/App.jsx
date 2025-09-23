import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <h1>Context API</h1>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
