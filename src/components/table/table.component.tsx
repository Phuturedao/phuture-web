import "./table.scss";

import React, { FunctionComponent } from "react";

import PhutureLogo from "assets/svgs/phuture-logo";

//TODO in case of more complicated requirements change table to div based table
const TableComponent: FunctionComponent<any> = () => {
  //TODO calculate based on amount of columns
  const width: string = `25%`;

  return (
    <div className="table-component">
      <table>
        <thead>
          <th style={{ width }}>Name</th>
          <th style={{ width }}>Market size 24h</th>
          <th style={{ width }}>%loss/24h</th>
          <th style={{ width }}>%gain/24h</th>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <tr key={i}>
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

export default TableComponent;
