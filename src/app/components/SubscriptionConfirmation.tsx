import React from "react";

interface SubscriptionConfirmationProps {
  firstName?: string; // Make firstName optional
  blogLink: string;
}

const SubscriptionConfirmation: React.FC<SubscriptionConfirmationProps> = ({
  firstName,
  blogLink,
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
      <p style={{ fontSize: "14px", color: "#4B5563" }}>
        👋 Hi, I&apos;m Hien from HienSpace newsletter
      </p>
      <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#4B5563" }}>
        📬 Thank You for Subscribing{firstName ? `, ${firstName}` : "!"}
      </h2>
      <p style={{ marginTop: "16px", fontSize: "18px", color: "#4B5563" }}>
        We&apos;re excited to have you on board. Check out our latest blog post:
      </p>
      <a
        href={blogLink}
        style={{
          marginTop: "8px",
          fontSize: "18px",
          color: "#3B82F6",
          textDecoration: "underline",
        }}
      >
        Read our latest blog
      </a>
      <p style={{ marginTop: "16px", fontSize: "12px", color: "#6B7280" }}>
        If you have any questions, feel free to reach out to us.
      </p>
      <div style={{ marginTop: "16px" }}>
        <a
          href="https://hienspace.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6B7280", textDecoration: "none", display: "block", margin: "8px 0" }}
          title="My portfolio"
        >
          💼 Portfolio
        </a>
        <a
          href="https://x.com/HarrisonPhan9"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6B7280", textDecoration: "none", display: "block", margin: "8px 0" }}
          title="Follow me on Twitter"
        >
          🐦 Twitter
        </a>
        <a
          href="https://github.com/harrisdevv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6B7280", textDecoration: "none", display: "block", margin: "8px 0" }}
          title="View my GitHub"
        >
          🐱‍💻 GitHub
        </a>
      </div>
    </div>
  );
};

export default SubscriptionConfirmation;
