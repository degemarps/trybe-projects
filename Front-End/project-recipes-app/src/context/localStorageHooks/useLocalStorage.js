import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialState) => {
  const storageValue = JSON.parse(localStorage.getItem(key));
  const [state, setState] = useState(() => {
    if (storageValue) {
      return storageValue;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
