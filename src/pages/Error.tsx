import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div>
      Error 404
      <button onClick={() => navigate("/")}>Back to home page</button>
    </div>
  );
}
