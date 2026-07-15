import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ addToWishlistA, addToWishlistB }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToWishlistA={addToWishlistA}
          addToWishlistB={addToWishlistB}
        />
      ))}
    </div>
  );
}

export default ProductList;