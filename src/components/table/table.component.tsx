import "./table.scss";

import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import PhutureLogo from "assets/svgs/phuture-logo";

interface Props extends RouteComponentProps<any> {
  title?: string;
}

//TODO in case of more complicated requirements change table to div based table
const TableComponent: FunctionComponent<Props> = ({ title, history }) => {
  //TODO calculate based on amount of columns
  const width: string = `25%`;

  return (
    <div className="table-component">
      {title && (
        <header>
          <h3 className="heading">{title}</h3>
        </header>
      )}
      <table>
        <thead>
          <tr>
            <td style={{ width }}>Name</td>
            <td style={{ width }}>Market size 24h</td>
            <td style={{ width }}>%loss/24h</td>
            <td style={{ width }}>%gain/24h</td>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <tr
              key={i}
              onClick={() => {
                history.push(`/indexes/defi`);
              }}
            >
              <td style={{ width }} className="logo">
                <div>
                  <PhutureLogo /> <span>Company Name</span>
                </div>
              </td>
              <td style={{ width }}>10%</td>
              <td style={{ width }}>5%</td>
              <td style={{ width }} className="highlight">
                +15%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(TableComponent);
