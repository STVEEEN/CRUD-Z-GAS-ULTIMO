import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../../api/api";
import "./MainScreen.css";

const MainScreen = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", description: "", price: "", stock: "" });
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleSelect = (product) => {
    setFormData({ id: product._id, name: product.name, description: product.description, price: product.price, stock: product.stock });
    setSelectedProduct(product._id);
  };

  const handleSubmit = async (action) => {
    if (action === "POST") await createProduct(formData);
    if (action === "PUT") await updateProduct(formData.id, formData);
    if (action === "DELETE") await deleteProduct(formData.id);

    const updatedData = await fetchProducts();
    setProducts(updatedData);
    setSelectedProduct(null);
    setFormData({ id: "", name: "", description: "", price: "", stock: "" });
  };

  return (
    <div className="main-container">
      <Sidebar />
      <main className="content">
        <h1 className="title">ALL THE TAMBOS BRO</h1>

        <div className="form-container">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter the name of the tambo" />

          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} placeholder="Enter the price of the tambo" />

          <label>Stock</label>
          <input type="number" name="stock" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} placeholder="Enter the Unit available of the tambo" />

          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Add a product description"></textarea>

          <div className="button-container">
            <button className="btn post" onClick={() => handleSubmit("POST")}>Post</button>
            <button className="btn put" onClick={() => handleSubmit("PUT")} disabled={!selectedProduct}>Put</button>
            <button className="btn get" onClick={() => fetchProducts()}>Get</button>
            <button className="btn delete" onClick={() => handleSubmit("DELETE")} disabled={!selectedProduct}>Delete</button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className={selectedProduct === product._id ? "selected-row" : ""}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button className="select-btn" onClick={() => handleSelect(product)}>Select</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default MainScreen;
