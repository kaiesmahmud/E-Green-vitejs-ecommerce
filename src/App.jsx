import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { Home, Product, Shop } from "./pages"

function App() {

  return (
    <div className="w-full">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:id" element={<Product/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
