import "./footer.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import Discord from "assets/svgs/discord";
import Medium from "assets/svgs/medium";
import Subscribe from "components/inputs/input-subscribe/input-subscribe.component";
import Twitter from "assets/svgs/twitter";

const FooterComponent: FunctionComponent = () => (
  <footer>
    <Container>
      <hr />
      <div className="footer-content">
        <div>
          <div>
            <h2 className="heading">Subscribe to our newsletter for updates</h2>
          </div>
          <div>
            <Subscribe />
          </div>
        </div>

        <div>
          <div className="owner">©PhutureDAO, 2020</div>
          <div>
            <div className="socials">
              <a
                href="https://discord.gg/frRD3Ck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://medium.com/@PhutureDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Medium />
              </a>
              <a
                href="https://discord.gg/frRD3Ck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default FooterComponent;