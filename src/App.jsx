import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Contact, Home, Product, Products, Shop } from "./pages"

function App() {

  return (
    <div className="w-full">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:catagory" element={<Products/>} />
        <Route path="/shop/:catagory/:id" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
