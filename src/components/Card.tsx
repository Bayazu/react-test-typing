import React from "react";

interface CardProps {
  width?: string;
  height?: string;
}

const Card = ({ width, height }: CardProps) => {
  return <div style={{ background: "blue", width, height }}>Card</div>;
};

export default Card;
