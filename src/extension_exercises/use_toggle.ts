import { useState } from "react";

function useToggle(
  initialPosition = false
): [boolean, () => void, (p: boolean) => void] {
  const [state, setState] = useState(initialPosition);

  const flipPosition = () => setState((prev) => !prev);

  const setPosition = (newPosition: boolean) => setState(() => newPosition);

  return [state, flipPosition, setPosition];
}

export default useToggle;
