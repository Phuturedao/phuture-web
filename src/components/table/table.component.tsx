import "./table.scss";

import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import PhutureLogo from "assets/svgs/phuture-logo";

interface Props extends RouteComponentProps<any> {
  title?: string;
  type?: string;
}

const INDEX_HEADERS = ["Name", "Market size 24h", "%loss/24h", "%gain/24h"];
const ASSET_HEADERS = [
  "Name",
  "USD Amount",
  "ETH Amount",
  "PHTR Amount",
  "%gain/24h",
  "Actions",
];

const IndexRow: FunctionComponent<any> = ({ history, width }) => (
  <tr
    onClick={() => {
      history.push(`/indexes/defi`);
    }}
  >
    <td className="logo">
      <div>
        <PhutureLogo /> <span>Company Name</span>
      </div>
    </td>
    <td>10%</td>
    <td>5%</td>
    <td className="highlight">+15%</td>
  </tr>
);

const colors: Array<string> = ["#0092CC", "#33C5FF", "#99E2FF"];

const AssetRow: FunctionComponent<any> = ({ history, colorIndex }) => (
  <tr
    onClick={() => {
      history.push(`/indexes/defi`);
    }}
  >
    <td className="logo">
      <div>
        <i className="dot" style={{ background: colors[colorIndex] }} />
        <span>Asset</span>
      </div>
    </td>
    <td>$214</td>
    <td>0.04 ETH</td>
    <td>100 PHTR</td>
    <td>5%</td>
    <td>
      <div className="actions">
        <button className="button">Deposit</button>
        <button className="button">Withdraw</button>
      </div>
    </td>
  </tr>
);

//TODO in case of more complicated requirements change table to div based table
const TableComponent: FunctionComponent<Props> = ({
  type = "index",
  title,
  history,
}) => {
  let headings: Array<string>;

  switch (type) {
    case "assets":
      headings = ASSET_HEADERS;

      break;
    default:
      headings = INDEX_HEADERS;
  }

  return (
    <div className={`table-component ${type ?? ""}`}>
      {title && (
        <header>
          <h3 className="heading">{title}</h3>
        </header>
      )}
      <table>
        <thead>
          <tr>
            {headings.map((th, i) => (
              <td key={i}>{th}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === "index" &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <IndexRow history={history} key={i} />
            ))}

          {type === "assets" &&
            [0, 1, 2].map((i) => (
              <AssetRow history={history} colorIndex={i} key={i} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(TableComponent);
