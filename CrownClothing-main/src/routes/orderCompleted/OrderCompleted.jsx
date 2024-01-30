function OrderCompleted() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh", // Set min-height to 100vh for vertical centering
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        <div style={{ position: "relative", top: "5px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <circle cx="12" cy="12" r="10" fill="green" />
            <text x="8" y="16" fill="white" fontSize="16" fontWeight="bold">
              ✓
            </text>
          </svg>
        </div>
        <div>
          <p style={{ marginTop: "0", marginBottom: "10px" }}>
            Thank You for ordering from CrownClothing.
          </p>
          <p style={{ marginTop: "0", marginBottom: "10px" }}>
            Your Tracking Number is 587465.
          </p>
          <p style={{ marginTop: "0", marginBottom: "10px" }}>
            You will receive the order within 2 weeks.
          </p>
          <p style={{ marginTop: "0", marginBottom: "10px" }}>
            For more details, Contact Us, and our Customer Service will respond
            instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleted;
