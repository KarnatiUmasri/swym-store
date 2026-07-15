import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";

function App() {
  // Load data from Local Storage
  const [wishlistA, setWishlistA] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlistA")) || [];
  });

  const [wishlistB, setWishlistB] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlistB")) || [];
  });

  const [mergedWishlist, setMergedWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("mergedWishlist")) || [];
  });

  // Save Wishlist A
  useEffect(() => {
    localStorage.setItem("wishlistA", JSON.stringify(wishlistA));
  }, [wishlistA]);

  // Save Wishlist B
  useEffect(() => {
    localStorage.setItem("wishlistB", JSON.stringify(wishlistB));
  }, [wishlistB]);

  // Save Merged Wishlist
  useEffect(() => {
    localStorage.setItem(
      "mergedWishlist",
      JSON.stringify(mergedWishlist)
    );
  }, [mergedWishlist]);

  // Add product to Wishlist A
  const addToWishlistA = (product) => {
    setWishlistA((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        alert("Product already exists in Wishlist A");
        return prev;
      }
      return [...prev, product];
    });
  };

  // Add product to Wishlist B
  const addToWishlistB = (product) => {
    setWishlistB((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        alert("Product already exists in Wishlist B");
        return prev;
      }
      return [...prev, product];
    });
  };

  // Merge Wishlists (Remove Duplicates)
  const mergeWishlists = () => {
    const merged = [...wishlistA, ...wishlistB];

    const uniqueProducts = merged.filter(
      (item, index, self) =>
        index === self.findIndex((p) => p.id === item.id)
    );

    setMergedWishlist(uniqueProducts);

    alert("Wishlists merged successfully!");
  };

  // Clear everything
  const clearAll = () => {
    setWishlistA([]);
    setWishlistB([]);
    setMergedWishlist([]);

    localStorage.removeItem("wishlistA");
    localStorage.removeItem("wishlistB");
    localStorage.removeItem("mergedWishlist");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />

      <h1>Welcome to Swym Store</h1>

      <ProductList
        addToWishlistA={addToWishlistA}
        addToWishlistB={addToWishlistB}
      />

      <br />

      <button
        onClick={mergeWishlists}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Merge Wishlists
      </button>

      <button
        onClick={clearAll}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Clear All
        
      </button>

      <br />
      <br />

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <Wishlist
          title="Wishlist A"
          items={wishlistA}
        />

        <Wishlist
          title="Wishlist B"
          items={wishlistB}
        />

        <Wishlist
          title="Merged Wishlist"
          items={mergedWishlist}
        />
      </div>
    </div>
  );
}

export default App;