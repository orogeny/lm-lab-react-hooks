import { useEffect, useRef, useState } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {countRef.current} times</p>
    </>
  );
};
