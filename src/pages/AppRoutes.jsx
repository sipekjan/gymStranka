import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Location from "./Location/Location"
import Contact from "./Contact/Contact"
import Price from "./Price/Price"
import Photo from "./Photo/Photo"

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/photo" element={<Photo/>}/>
            </Routes>
        </BrowserRouter>
    )
}