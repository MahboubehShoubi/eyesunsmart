import AdminProductsSettingPage from "@/template/AdminProductsSettingPage";
import React from "react";

function Productslayout({ children }) {
  return (
    <>
      <AdminProductsSettingPage />
      <div>{children}</div>
    </>
  );
}

export default Productslayout;
