import React from "react";

const ErrorMessage = ({ message }) => (
  <div className="error-message">
    <strong>Error:</strong> {message}
  </div>
);

export default ErrorMessage;
