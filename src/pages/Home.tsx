import React from "react";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  return (
    <div style={{ color: "white" }}>
      Root
      <button onClick={() => navigate("/404")}>404</button>
    </div>
  );
}
