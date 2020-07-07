import "./faq-section.scss";

import React, { FunctionComponent } from "react";

type Props = {
  title?: string;
  description?: string;
};

const FaqSection: FunctionComponent<Props> = ({ title, description }) => (
  <section className="faq-section">
    <h2 className="heading">{title}</h2>
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: description || "" }}
    />
  </section>
);

export default FaqSection;
