import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
    return (
        <>
            <h1>REACT ROUTER</h1>

            <BrowserRouter>
                <NavBar></NavBar>
                <SearchForm />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/products/:id/info" element={<Info />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/company" element={<Navigate to="/about" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
