import { useEffect, useState } from "react";

const useSingleItem = (value, id) => {
  const [item, setItem] = useState({});
  const url = `http://localhost:5000/${value}/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [url]);

  return [item, setItem];
};

export default useSingleItem;
