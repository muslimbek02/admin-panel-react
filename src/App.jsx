import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddClientPage from "./pages/AddClientPage";
import AddMarketingShares from "./pages/AddMarketingShares";
import AddOrderPage from "./pages/AddOrderPage";
import ClientsPage from "./pages/ClientsPage";
import Dashboard from "./pages/Dashboard";
import FilterOrderPage from "./pages/FilterOrderPage";
import Login from "./pages/Login";
import MarketingBanners from "./pages/MarketingBanners";
import MarketingPage from "./pages/MarketingPage";
import MarketingReviews from "./pages/MarketingReviews";
import MarketingShares from "./pages/MarketingShares";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/add-order/:id" element={<AddOrderPage />} />
        <Route path="/order/filter" element={<FilterOrderPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/add" element={<AddClientPage />} />
        <Route path="/marketing" element={<MarketingPage />}>
          <Route path="" element={<Navigate to="shares" />} />
          <Route path="shares" element={<MarketingShares />} />
          <Route path="banners" element={<MarketingBanners />} />
          <Route path="reviews" element={<MarketingReviews />} />
          <Route path="shares/add" element={<AddMarketingShares />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
