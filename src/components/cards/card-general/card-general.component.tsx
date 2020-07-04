import "./card-general.scss";

import React, { FunctionComponent } from "react";

import CreateIcon from "assets/svgs/create";
import KeyIcon from "assets/svgs/key";
import SpreadIcon from "assets/svgs/spread";

type PropTypes = {
  icon?: string;
  title?: string;
  description?: string;
};

interface InterfaceIcons {
  [key: string]: any | undefined;
}

const icons: InterfaceIcons = {
  spread: <SpreadIcon />,
  create: <CreateIcon />,
  key: <KeyIcon />,
};

const CardGeneral: FunctionComponent<PropTypes> = ({
  icon,
  title,
  description,
}) => (
  <div className="card-general">
    {icon && icons[icon]}
    <h5 className="heading">{title}</h5>
    <p>{description}</p>
  </div>
);

export default CardGeneral;
