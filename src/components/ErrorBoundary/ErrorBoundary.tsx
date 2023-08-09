import React, { useEffect, useState } from "react";
import Error from "../pages/Error";

const ErrorBoundary: React.FC = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleOnError = (event: ErrorEvent) => {
      console.debug("Error occurred:", event.error);
      setHasError(true);
    };

    window.addEventListener("error", handleOnError);

    return () => {
      window.removeEventListener("error", handleOnError);
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return <Error />;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
