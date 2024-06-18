"use client";

import React from "react";
import { Link } from "react-scroll";

interface Props {
  sectionNames?: string[];
  logo?: string | null;
  backgroundColor?: string | null;
  textColor?: string | null;
}

export const Header = ({ sectionNames, logo, backgroundColor, textColor }: Props) => {
  const handleClick = () => {};

  return (
    <div
      className="fixed flex justify-between items-center w-screen h-20 top-0 px-10 font-bold cursor-pointer"
      style={{ backgroundColor: backgroundColor ?? "", color: textColor ?? "black" }}
    >
      <div>{logo ?? "로고"}</div>

      <div className="flex gap-6">
        {sectionNames?.map((value: string, index: number) => (
          <Link to={value} spy={true} smooth={true} offset={-80} key={index}>
            {value}
          </Link>
        ))}
      </div>
    </div>
  );
};
