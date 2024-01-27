import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddOrderPage from "./pages/AddOrderPage"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import OrderPage from "./pages/OrderPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/add-order/:id" element={<AddOrderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
