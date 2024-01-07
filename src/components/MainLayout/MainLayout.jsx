import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />

      <Outlet />
    </div>
  );
}
