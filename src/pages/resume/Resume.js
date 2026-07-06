import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from "../../assets/docs/Siddharth.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      showResume: false,
    };
  }

  toggleResume = () => {
    this.setState((prev) => ({ showResume: !prev.showResume, pageNumber: 1 }));
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  changePage = (offset) => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + offset,
    }));
  };

  previousPage = () => {
    this.changePage(-1);
  };

  nextPage = () => {
    this.changePage(1);
  };

  render() {
    const theme = this.props.theme;
    const { pageNumber, numPages, showResume } = this.state;
    const isSection = this.props.isSection;

    return (
      <div className="resume-main" id="resume" style={{ position: "relative", zIndex: 1, padding: "60px 0 20px", textAlign: "center" }}>
        {!isSection && <Header theme={theme} />}

        {/* Toggle Button */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <button
            onClick={this.toggleResume}
            style={{
              padding: "14px 36px",
              fontSize: "17px",
              fontFamily: "Google Sans Medium",
              fontWeight: "bold",
              background: showResume ? "#444" : "linear-gradient(135deg, #ffd54f, #ffa000)",
              color: showResume ? "#fff" : "#1a1a1a",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
            }}
          >
            {showResume ? "✕ Close Resume" : "📄 Show My Resume"}
          </button>
        </div>

        {/* Collapsible Resume Viewer */}
        {showResume && (
          <Fade bottom duration={1000} distance="30px">
            <div>
              <div className="download-btn" style={{ marginBottom: "20px" }}>
                <Button
                  text="📥 Download Resume"
                  newTab={true}
                  href={resumePdf}
                  theme={theme}
                />
              </div>

              <div className="resume-page">
                <Document
                  file={resumePdf}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  loading={
                    <div className="resume-loading">
                      <div className="loading-spinner"></div>
                      <p>Loading PDF...</p>
                    </div>
                  }
                  error={
                    <div className="resume-error">
                      <p>Failed to load PDF.</p>
                    </div>
                  }
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>

              {numPages && (
                <div className="pagination-controls">
                  <button
                    type="button"
                    className="pagination-btn"
                    disabled={pageNumber <= 1}
                    onClick={this.previousPage}
                  >
                    Previous
                  </button>
                  <p className="page-info">
                    Page {pageNumber} of {numPages}
                  </p>
                  <button
                    type="button"
                    className="pagination-btn"
                    disabled={pageNumber >= numPages}
                    onClick={this.nextPage}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </Fade>
        )}

        {!isSection && <Footer theme={theme} onToggle={this.props.onToggle} />}
        {!isSection && <TopButton theme={theme} />}
      </div>
    );
  }
}