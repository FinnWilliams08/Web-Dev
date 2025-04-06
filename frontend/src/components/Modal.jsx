import { Column } from "./Column";
import { Row } from "./Row";

export const Modal = ({ children, setVisibility }) => {
  return (
    <div>
      {/* Background overlay */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: 999, // Set a high zIndex for the overlay
          top: 0,
          left: 0,
          position: "fixed", // Ensure it covers the entire screen
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background
        }}
        onClick={() => setVisibility(false)}
      ></div>

      {/* Modal content */}
      <Column
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          minWidth: "60vw",
          maxHeight: "90vh",
          transform: "translate(-50%, -20%)",
          backgroundColor: "black",
          border: "2px solid white",
          borderRadius: "8px",
          padding: "16px",
          zIndex: 1000, // Ensure the modal is above the overlay
        }}
      >
        {/* Close button */}
        <Row style={{ justifyContent: "flex-end" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => setVisibility(false)}
          >
            ✖
          </button>
        </Row>
        {children}
      </Column>
    </div>
  );
};
