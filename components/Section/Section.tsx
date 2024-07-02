"use client";

import React from "react";
import { BackgroundType, ChildEntity, ComponentEntity } from "@/graphql/generated/types";
import { Child } from "../Child";
import * as S from "./Section.style";

interface Props {
  data: ComponentEntity;
  id: string;
  isMobile: boolean;
}

export const Section = ({ data, id, isMobile }: Props) => {
  return (
    <S.Container
      id={id}
      $height={data.componentStyle?.height || undefined}
      $padding={data.componentStyle?.padding || undefined}
      style={
        data.componentStyle?.backgroundType === BackgroundType.Color
          ? {
              backgroundColor: data.componentStyle.background ?? "#FFF",
            }
          : data.componentStyle?.backgroundType === BackgroundType.Image
          ? {
              backgroundImage:
                `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.componentStyle.background})` ??
                "none",
            }
          : undefined
      }
    >
      <S.Title $titleStyle={data.titleStyle ?? undefined}>{data.title}</S.Title>
      <S.Content
        $contentStyle={data.contentStyle ?? undefined}
        dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
      />
      <S.ChildrenBox>
        {data.children &&
          data.children.map((value: ChildEntity, index: number) => (
            <Child key={index} data={value} />
          ))}
      </S.ChildrenBox>
    </S.Container>
  );
};
