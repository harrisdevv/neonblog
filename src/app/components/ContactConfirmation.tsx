import React from "react";

interface ContactConfirmationProps {
  firstName?: string; // Make firstName optional
}

const ContactConfirmation: React.FC<ContactConfirmationProps> = ({
  firstName,
}) => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "white",
        border: "1px solid #D1D5DB",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center", // Center text
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#4B5563" }}>
        📬 Thank You for Contacting Us{firstName ? `, ${firstName}` : "!"}
      </h2>
      <p style={{ marginTop: "16px", fontSize: "18px", color: "#4B5563" }}>
        We appreciate your message and will get back to you soon.
      </p>
    </div>
  );
};

export default ContactConfirmation;
