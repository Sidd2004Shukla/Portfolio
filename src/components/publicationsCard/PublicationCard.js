import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    if (url && url !== "#") {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: theme.body === "#1A1A1A" ? "#2B2B2B" : theme.highlight }}
      onClick={() => openPubinNewTab(pub.url)}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={pub.id}>
          <div className="publication-name-div">
            <i className="fab fa-github" style={{ marginRight: "10px", fontSize: "24px", color: theme.text }}></i>
            <p className="publication-name" style={{ color: theme.text }}>
              {pub.name}
            </p>
          </div>
          <p className="publication-description" style={{ color: theme.secondaryText }}>
            {pub.description}
          </p>
          <div className="publication-details" style={{ marginTop: "15px" }}>
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText, fontSize: "14px" }}
            >
              Created on {pub.createdAt.split("T")[0]}
            </p>
          </div>

          <div className="project-languages-div" style={{ marginTop: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {pub.languages && pub.languages.map((lang, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  backgroundColor: theme.body === "#1A1A1A" ? "#1A1A1A" : theme.highlight,
                  color: "#ffd54f",
                  border: `1px solid ${theme.secondaryText}44`,
                  fontFamily: "Google Sans Regular"
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
