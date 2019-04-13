import React from "react";
import { Row, Col } from "antd";
// import classes from "./Footer.module.css";
import "./footer.css";
function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G2</h2>
              <div>
                <a target="_blank " href="/">
                  Abc
                </a>
              </div>
              <div>
                <a target="_blank " href="/">
                  API Abc
                </a>
              </div>
              <div>
                <a href="/">Abc</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G6</h2>
              <div>
                <a href="/">Abc</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  API Abc
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  Abc
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>F2</h2>
              <div>
                <a href="/">Abc</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  API Abc
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  Abc
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Abc</h2>
              <div>
                <a href="/">Abc</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  Abc
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  Abc
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/">
                  Abc
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Abc</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ant.design/"
                >
                  Ant Design
                </a>
                <span> - </span>
                <span>Abc UI Abc</span>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eggjs.org/"
                >
                  Egg
                </a>
                <span> - </span>
                <span>Abc Node Web Abc</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: "16px",
              paddingRight: 12,
              marginRight: 11,
              borderRight: "1px solid rgba(255, 255, 255, 0.55)"
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              Abc ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Abc
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP Abc B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © Abc</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
