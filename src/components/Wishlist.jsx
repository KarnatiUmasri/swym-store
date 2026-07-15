function Wishlist({ title, items, removeItem }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        padding: "20px",
        width: "320px",
        minHeight: "320px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "20px",
          borderBottom: "2px solid #2563eb",
          paddingBottom: "10px",
        }}
      >
        {title} ({items.length})
      </h2>

      {items.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "70px",
          }}
        >
          <h3
            style={{
              color: "#6b7280",
              marginBottom: "10px",
            }}
          >
            🛒 Empty Wishlist
          </h3>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "15px",
            }}
          >
            Add products to start building your wishlist.
          </p>
        </div>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                padding: "12px",
                marginBottom: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <h4
                  style={{
                    margin: 0,
                    color: "#111827",
                  }}
                >
                  {item.name}
                </h4>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#2563eb",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;