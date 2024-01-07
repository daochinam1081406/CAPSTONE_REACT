import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Header</h3>
      {currentUser && <p>{currentUser.hoTen}</p>}
    </div>
  );
}
