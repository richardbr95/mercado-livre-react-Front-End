// import fetchProducts from "../../api/fetchProducts";
import mockProducts from "../../api/mockProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product}></ProductCard>
      ))}
    </section>
  );
}

export default Products;
