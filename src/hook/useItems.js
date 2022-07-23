import { useEffect, useState } from "react";

const useItems = (value) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/${value}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [value]);

  return [items, setItems];
};

export default useItems;
