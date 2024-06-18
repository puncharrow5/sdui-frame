"use client";

import React from "react";
import { ComponentEntity } from "@/graphql/generated/types";

interface Props {
  id: string;
  data: ComponentEntity;
}

export const Section = ({ data, id }: Props) => {
  return (
    <div
      id={id}
      className={`flex flex-col justify-center items-center text-center w-full min-h-[754px] h-full`}
      style={{ backgroundColor: data.background ?? "#FFF" }}
    >
      <h1 className={data.titleStyle ?? ""}>{data.title}</h1>
      <div
        className={data.contentStyle ?? ""}
        dangerouslySetInnerHTML={{ __html: data.content as TrustedHTML }}
      />
    </div>
  );
};
