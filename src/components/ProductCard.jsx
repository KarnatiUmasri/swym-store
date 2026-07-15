function ProductCard({
  product,
  addToWishlistA,
  addToWishlistB,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="200"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>{product.category}</p>

      <button onClick={() => addToWishlistA(product)}>
        Add to Wishlist A
      </button>

      <br />
      <br />

      <button onClick={() => addToWishlistB(product)}>
        Add to Wishlist B
      </button>
    </div>
  );
}

export default ProductCard;