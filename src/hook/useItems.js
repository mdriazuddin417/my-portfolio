import { useEffect, useState } from "react";

const useItems = (value) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://portfolio1212.herokuapp.com/${value}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setItems(data);
      });
  }, [value]);

  return [items, loading];
};

export default useItems;
