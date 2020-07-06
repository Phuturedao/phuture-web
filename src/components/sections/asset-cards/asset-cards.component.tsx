import "./asset-cards.scss";

import React, { FunctionComponent } from "react";

import AssetCard from "components/cards/asset-card/asset-card.component";

type Props = {
  title?: string;
};
const AssetCardsSection: FunctionComponent<Props> = ({ title }) => (
  <section className="asset-cards">
    <header>
      <h3 className="heading">{title}</h3>
    </header>
    <div className="cards">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <AssetCard key={i} />
      ))}
    </div>
  </section>
);

export default AssetCardsSection;
