import React, { useEffect, useState } from "react";
import CardDashboard from "../components/CardDashboard";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { authCokie } = useAuth();

  const [data, setData] = useState({
    employees: 0,
    clients: 0,
    blogs: 0,
    products: 0,
  });

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${authCokie}`,
      };

      const employeesResponse = await fetch("http://localhost:4000/api/employees", { headers });
      const clientsResponse = await fetch("http://localhost:4000/api/clients", { headers });
      const blogsResponse = await fetch("http://localhost:4000/api/blog", { headers });
      const productsResponse = await fetch("http://localhost:4000/api/products", { headers });

      if (!employeesResponse.ok) throw new Error(`Employees API error: ${employeesResponse.status}`);
      if (!clientsResponse.ok) throw new Error(`Clients API error: ${clientsResponse.status}`);
      if (!blogsResponse.ok) throw new Error(`Models API error: ${blogsResponse.status}`);
      if (!productsResponse.ok) throw new Error(`Categories API error: ${productsResponse.status}`);

      const employeesData = await employeesResponse.json();
      const clientsData = await clientsResponse.json();
      const blogsData = await blogsResponse.json();
      const productsData = await productsResponse.json();

      setData({
        employees: employeesData.length,
        clients: clientsData.length,
        blogs: blogsData.length,
        products: productsData.length,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #f3e5f5 0%, #e1bee7 100%)",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              color: "#6a1b9a",
              letterSpacing: "3px",
            }}
          >
            Dashboard
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard 
              label="Empleados" 
              data={data.employees} 
              icon="👨‍💼"
              color="#6a1b9a"
              bgColor="#f3e5f5"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard 
              label="Clientes" 
              data={data.clients} 
              icon="👥"
              color="#6a1b9a"
              bgColor="#f3e5f5"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard 
              label="Blogs" 
              data={data.blogs} 
              icon="✍️"
              color="#6a1b9a"
              bgColor="#f3e5f5"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDashboard 
              label="Productos" 
              data={data.products} 
              icon="📦"
              color="#6a1b9a"
              bgColor="#f3e5f5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;