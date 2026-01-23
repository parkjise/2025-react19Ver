"use client";
import React from "react";
type errorProps = {
  error: Error;
  reset: () => void;
  message: string;
};

const error = ({ error, reset }: errorProps) => {
  return (
    <div>
      <h2>{error.message || "Something went wrong"}</h2>
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default error;
