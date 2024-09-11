import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import OrderList from './pages/OrderList';
import OrderForm from './pages/OrderForm';
import SupplierList from './pages/SupplierList';
import SupplierForm from './pages/SupplierForm';
import Navbar from './components/Navbar';
import { InventoryProvider } from './context/InventoryContext';
import { OrderProvider } from './context/OrderContext';
import { SupplierProvider } from './context/SupplierContext';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import ReportPage from './pages/ReportPage';
function App() {
  return (
    <Router>
      <Navbar/>
      <InventoryProvider>
        <OrderProvider>
          <SupplierProvider>
     <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      
        <Route path="/products" element={<ProductForm />} />
        <Route path="/add-product" element={<ProductList />} />
        <Route path="/orders" element={<OrderForm />} />
        <Route path="/add-order" element={<OrderList />} />
        <Route path="/suppliers" element={<SupplierForm />} />
        <Route path="/add-supplier" element={<SupplierList />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Report" element={<ReportPage />} />
      </Routes>
     </SupplierProvider>
      </OrderProvider>
      </InventoryProvider>
    </Router>
  );
}

export default App;