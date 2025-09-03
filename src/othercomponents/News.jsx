import React, { useState } from "react";

const News = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // clear input
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div style={styles.container}>
      {/* <h2 style={{ marginBottom: "10px" }}>Subscribe to our Newsletter</h2> */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    gap: "10px",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "250px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#391459",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default News;
