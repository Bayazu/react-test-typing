import React, { FC } from "react";

export enum CardVariant {
  OUTLINED = "outlined",
  PRIMARY = "primary",
}

interface ICardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<ICardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: variant === CardVariant.PRIMARY ? "lightblue" : "",
        border: variant === CardVariant.OUTLINED ? "1px solid gray" : "none",
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
