import React, { FunctionComponent } from "react";

import Header from "components/header/header.component";

const DefaultLayout: FunctionComponent = ({ children }) => (
  <div className="default-layout">
    <Header />
    <main aria-label="Page uqniue content">{children}</main>
    <footer></footer>
  </div>
);

export default DefaultLayout;
