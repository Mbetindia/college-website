function Contact() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f6f9",
      padding: "20px",
    },
    card: {
      width: "100%",
      maxWidth: "450px",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "10px",
      color: "#333",
    },
    text: {
      textAlign: "center",
      color: "#666",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>We'd love to hear from you!</p>

        <form>
          <input
            type="text"
            placeholder="Enter your name"
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            required
          />

          <textarea
            rows="5"
            placeholder="Enter your message"
            style={styles.textarea}
            required
          ></textarea>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;