import React, { FunctionComponent } from "react";

import Footer from "components/footer/footer.component";
import Header from "components/header/header.component";

type Props = {
  navigation?: any;
};

const DefaultLayout: FunctionComponent<Props> = ({ children, navigation }) => (
  <div className="default-layout">
    <Header {...navigation} />
    <main aria-label="Page uqniue content">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
