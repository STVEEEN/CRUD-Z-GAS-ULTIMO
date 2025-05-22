import React, { useState, useEffect } from "react";
import RegisterEmployees from "../components/Employees/RegisterEmployees";
import ListEmployees from "../components/Employees/ListEmployees";
import { Toaster } from "react-hot-toast";

import useDataEmployees from "../components/Employees/hooks/useDataEmployees";

const Employees = () => {
  useEffect(() => {
    document.title = "Empleados";
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    address,
    setAddress,
    birthdate,
    setBirthdate,
    hireDate,
    setHireDate,
    isssNumber,
    setIsssNumber,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  } = useDataEmployees();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #f3e5f5 0%, #e1bee7 100%)",
        padding: "40px 0",
      }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "900px",
        }}
      >
        <div
          className="shadow-lg p-4"
          style={{
            background: "white",
            border: "none",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 0 rgba(149, 117, 205, 0.3)",
            color: "#6a1b9a",
          }}
        >
          <h1
            className="fw-bold mb-4 text-center"
            style={{
              color: "#6a1b9a",
              textShadow: "0 0 10px #6a1b9a, 0 0 20px #6a1b9a",
              letterSpacing: "2px",
            }}
          >
            Empleados
          </h1>
          <div className="d-flex border-bottom mb-4" style={{ borderColor: "#9c27b0" }}>
            <button
              className="btn me-2 fw-bold"
              style={{
                color: activeTab === "list" ? "#6a1b9a" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "list" ? "2px solid #9c27b0" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(156, 39, 176, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => setActiveTab("list")}
            >
              Lista de empleados
            </button>
            <button
              className="btn fw-bold"
              style={{
                color: activeTab === "form" ? "#6a1b9a" : "#b0b0b0",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === "form" ? "2px solid #9c27b0" : "none",
                borderRadius: 0,
                letterSpacing: "1px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(156, 39, 176, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => {
                setActiveTab("form");
                cleanData();
              }}
            >
              Gestionar Empleados
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <ListEmployees
                setId={setId}
                setActiveTab={setActiveTab}
                updateEmployee={updateEmployee}
                handleUpdate={handleUpdate}
                deleteEmployee={deleteEmployee}
                employees={employees}
                loading={loading}
              />
            )}
            {activeTab === "form" && (
              <RegisterEmployees
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                telephone={telephone}
                setTelephone={setTelephone}
                dui={dui}
                setDui={setDui}
                address={address}
                setAddress={setAddress}
                birthdate={birthdate}
                setBirthdate={setBirthdate}
                hireDate={hireDate}
                setHireDate={setHireDate}
                isssNumber={isssNumber}
                setIsssNumber={setIsssNumber}
                errorEmpleado={errorEmpleado}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                employees={employees}
                setEmployees={setEmployees}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Employees;
