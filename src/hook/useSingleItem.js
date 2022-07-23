import { useEffect, useState } from "react";

const useSingleItem = (value, id) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const url = `https://portfolio1212.herokuapp.com/${value}/${id}`;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setItem(data);
      });
  }, [url]);

  return [item, loading];
};

export default useSingleItem;
