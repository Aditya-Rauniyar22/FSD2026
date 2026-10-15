import { useEffect, useState } from "react";

function Shopping() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const jsonRes = await response.json();
        setProducts(jsonRes);
      } catch (e) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ width: "300px", padding: "16px", border: "1px solid #ddd", borderRadius: "12px" }}>
      <h2 style={{ marginTop: 0 }}>Shopping</h2>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
          {products.slice(0, 4).map((item) => (
            <li key={item.id} style={{ borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
              <strong>{item.title}</strong>
              <div style={{ fontSize: "14px", color: "#555" }}>₹{item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Shopping;