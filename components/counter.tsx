"use client";
import { useState } from "react";

export default function Counter({
  dictionary,
}: {
  dictionary: {
    increment: string;
    decrement: string;
  };
}) {
  const [count, setCount] = useState(0);
  return (
    <p className="m-4 p-4 border rounded-md bg-green-800 font-bold">
      Client Component: {""}
      <button
        onClick={() => setCount((n) => n - 1)}
        className="bg-blue-300 text-black rounded-sm m-2 p-2"
      >
        {dictionary.decrement}
      </button>
      {""}
      <span className="text-2xl">{count}</span>
      {""}
      <button
        onClick={() => setCount((n) => n - 1)}
        className="bg-blue-300 text-black rounded-sm m-2 p-2"
      >
        {dictionary.increment}
      </button>
    </p>
  );
}
