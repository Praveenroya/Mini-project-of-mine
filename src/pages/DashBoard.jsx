import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const Dashboard = () => {
  const { reportData } = useDashboard(); // Access report data from the context

  return (
    <div>
      <h2>Reporting Dashboard</h2>
      <div>
        <h3>Total Products: {reportData.totalProducts}</h3>
        <h3>Total Orders: {reportData.totalOrders}</h3>
        <h3>Total Suppliers: {reportData.totalSuppliers}</h3>
        <h3>Total Revenue: ${reportData.totalRevenue}</h3>
      </div>
    </div>
  );
};

export default Dashboard;