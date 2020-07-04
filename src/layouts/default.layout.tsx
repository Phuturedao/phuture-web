import React, { FunctionComponent } from "react";

import Footer from "components/footer/footer.component";
import Header from "components/header/header.component";

const DefaultLayout: FunctionComponent = ({ children }) => (
  <div className="default-layout">
    <Header />
    <main aria-label="Page uqniue content">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
