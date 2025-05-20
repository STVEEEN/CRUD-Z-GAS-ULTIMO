import React, { useState } from 'react';
import './MainScreen.css';

const TambosForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (method) => {
    const url = 'http://tu-backend.com/api/tambos';
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method !== 'GET' ? JSON.stringify(formData) : undefined
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (method === 'GET') setProducts(data);
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="tambos-screen">
      <h1>ALL THE TAMBOS BRO</h1>
      
      <div className="form-container">
        <div className="input-group">
          <label>Enter the name of the tambo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="input-group">
          <label>Enter the price of the tambo</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>

        <div className="input-group">
          <label>Enter the Unit available of the tambo</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
          />
        </div>

        <div className="input-group full-width">
          <label>Add a product description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
      </div>

      <div className="crud-buttons">
        <button onClick={() => handleSubmit('POST')}>Post</button>
        <button onClick={() => handleSubmit('PUT')}>Put</button>
        <button onClick={() => handleSubmit('GET')}>Get</button>
        <button onClick={() => handleSubmit('DELETE')}>Delete</button>
      </div>

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.stock} units</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TambosForm;