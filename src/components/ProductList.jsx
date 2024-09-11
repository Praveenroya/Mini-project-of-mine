import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import { useInventory } from '../context/InventoryContext';

const ProductList = () => {
  const { useState, dispatch } = useInventory();
  const { products, loading } = useState;

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/products');
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        message.error('Error fetching products');
        dispatch({ type: 'SET_ERROR', payload: error });
      }
    };

    fetchProducts();
  }, [dispatch]);

  const columns = [
    { title: 'Product Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Stock Quantity', dataIndex: 'stockQuantity', key: 'stockQuantity' },
    { title: 'Reorder Level', dataIndex: 'reorderLevel', key: 'reorderLevel' },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ProductList;