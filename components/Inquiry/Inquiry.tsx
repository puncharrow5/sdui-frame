"use client";

import React, { useState } from "react";
import { BackgroundType, ComponentEntity } from "@/graphql/generated/types";
import * as S from "./Inquiry.style";

interface Props {
  id: string;
  data: ComponentEntity;
  siteEmail: string;
}

export const Inquiry = ({ id, data, siteEmail }: Props) => {
  const [emailForm, setEmailForm] = useState({
    email: "",
    phoneNumber: "",
    content: "",
    siteEmail,
  });

  const handleChange = (key: string) => (e: any) => {
    setEmailForm({
      ...emailForm,
      [key]: key === "phoneNumber" ? e.target.value.replace(/\D/g, "") : e.target.value,
    });
  };

  return (
    <S.Container id={id}>
      <S.InquiryImage
        id={id}
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
      />

      <S.InquiryBox>
        <S.Title $titleStyle={data.titleStyle ?? undefined}>{data.title}</S.Title>
        <S.Content
          $contentStyle={data.contentStyle ?? undefined}
          dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
        />

        <S.Form $textSize={data.contentStyle?.size ?? undefined}>
          <label className="mb-2">이메일</label>
          <input
            value={emailForm.email}
            onChange={handleChange("email")}
            placeholder="abc@gmail.com"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2">전화번호</label>
          <input
            value={emailForm.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="01012341234"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2">문의내용</label>
          <textarea
            value={emailForm.content}
            onChange={handleChange("content")}
            placeholder="최소 10자 이상 작성해주세요."
            className="h-[200px] p-3 border rounded-md resize-none"
          />

          <button className="mt-16 p-4 bg-blue-900 border rounded-full text-xl">문의하기</button>
        </S.Form>
      </S.InquiryBox>
    </S.Container>
  );
};
