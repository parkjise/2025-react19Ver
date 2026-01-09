"use client";
import React, { useState } from "react";
import { counterTrigger } from "@/app/helpers/actions";

type CounterProps = {
  counterTrigger: () => void;
};

const Counter = ({ counterTrigger }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      counter <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          counterTrigger();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Counter;
