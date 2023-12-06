import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState<string[]>([]);

  return (
    <>
      <h2>useState</h2>

      <p>{cats}</p>

      <button onClick={() => setCats((prev) => prev.concat("🐈"))}>
        There are {cats.length} cats 🥳
      </button>
    </>
  );
}
