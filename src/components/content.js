import "./content.css";
import ProductList from "./ProductList";
// import Arrays from './arraysOfData';
import { useState, useEffect } from "react";

function Content(props) {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setData(products));
  }, [])

  const products = data.filter((item) => {
      return search.toLowerCase() === "" ? item : item.price >= Number(search);
    })
    .map((product) => <ProductList key={product.id} product={product} />);
  

  return (
    <>
      <div className="content">
        <form className="form_search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            id=""
            onKeyUp={(e) => setSearch(e.target.value)}
            placeholder="search by price..."
          />
        </form>
        {
          data.length === 0 
          ? (<h1>Loading...</h1>) 
          : (<ul className="productList">{products}</ul>)
        }
      </div>
    </>
  );
}

export default Content;
