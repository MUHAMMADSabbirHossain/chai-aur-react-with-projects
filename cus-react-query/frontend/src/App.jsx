import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const { products, error, loading } = customReactQuery({
    urlPath: `api/products?search=${search}`,
    search,
  });

  // if (error) {
  //   return <h1>Something went wrong.</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Chai aur API in react.</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <h1>Something went wrong.</h1>}
      {loading && <h1>Loading...</h1>}
      <h2>Number of Products are: {products?.length}</h2>
    </>
  );
}

export default App;

function customReactQuery({ urlPath }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        const data = await response.data;

        setProducts(data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error.message);
          return;
        }
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();

    // cleanup
    return () => {
      controller.abort();
    };
  }, [urlPath]);

  return {
    products,
    error,
    loading,
  };
}
