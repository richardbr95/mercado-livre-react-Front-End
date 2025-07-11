// import fetchProducts from "../../api/fetchProducts";
import mockProducts from "../../api/mockProducts";
import AppContext from "../../context/AppContext";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import { useEffect, useContext } from "react";

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setProducts(mockProducts);
    setLoading(false);
  }, [setProducts, setLoading]);

  return (
    (loading && <Loading></Loading>) || (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product}></ProductCard>
        ))}
      </section>
    )
  );
}

export default Products;
