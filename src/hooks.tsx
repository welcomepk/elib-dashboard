import { useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {
  // Retrieve stored value from localStorage or use initialValue if not found
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Initialize state with the retrieved value or the initial value
  const [value, setValue] = useState<T>(initial);

  // Update localStorage whenever the value changes
  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue];
}

export default useLocalStorage;
