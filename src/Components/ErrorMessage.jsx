import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className="errorMessage">
      <div>{children}</div>;
    </div>
  );
};

export default ErrorMessage;
