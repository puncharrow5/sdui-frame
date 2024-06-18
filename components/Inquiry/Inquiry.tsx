"use client";

import React, { useState } from "react";
import { ComponentEntity } from "@/graphql/generated/types";
import { isValidEmail, isValidNumber } from "@/utils";

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

  const handleSend = async () => {
    if (!emailForm.email.trim().length) {
      return alert("이메일을 입력해주세요.");
    }
    if (!isValidEmail(emailForm.email)) {
      return alert("올바른 이메일 형식이 아닙니다.");
    }
    if (!emailForm.phoneNumber.trim().length) {
      return alert("연락처를 입력해주세요.");
    }
    if (!isValidNumber(emailForm.phoneNumber)) {
      return alert("올바른 전화번호 형식이 아닙니다.");
    }
    if (emailForm.content.length < 20) {
      return alert("문의 내용을 20자 이상 작성해주세요.");
    } else {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(emailForm),
      });

      const post = await response.json();

      if (post.status == 200) {
        setEmailForm({ email: "", phoneNumber: "", content: "", siteEmail });
        alert("문의하기를 완료했습니다.");
        return;
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
        return;
      }
    }
  };

  return (
    <div id={id} className="flex justify-center w-full min-h-[754px] h-full">
      <div className="flex items-center justify-center w-1/2 bg-blue-500">배경</div>
      <div className="flex flex-col justify-start w-1/2 p-20 bg-[#F9F9F9]">
        <h1 className={data.titleStyle ?? ""}>{data.title}</h1>
        <div
          className={data.contentStyle ?? ""}
          dangerouslySetInnerHTML={{ __html: data.content as TrustedHTML }}
        />

        <div className="flex flex-col mt-10">
          <label className="mb-2 text-[20px]">이메일</label>
          <input
            value={emailForm.email}
            onChange={handleChange("email")}
            placeholder="abc@gmail.com"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2 text-[20px]">전화번호</label>
          <input
            value={emailForm.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="01012341234"
            className="p-3 border rounded-md"
          />

          <label className="mt-6 mb-2 text-[20px]">문의내용</label>
          <textarea
            value={emailForm.content}
            onChange={handleChange("content")}
            placeholder="최소 10자 이상 작성해주세요."
            className="h-[200px] p-3 border rounded-md"
          />

          <button
            onClick={handleSend}
            className="mt-16 p-4 bg-blue-900 border rounded-full text-xl"
          >
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
};
