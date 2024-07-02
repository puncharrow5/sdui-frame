"use client";

import React, { useEffect, useState } from "react";
import { ComponentEntity, ComponentType, SiteEntity } from "@/graphql/generated/types";
import { Section } from "../Section";
import { Header } from "../Header";
import { Inquiry } from "../Inquiry";
import { Footer } from "../Footer";
import * as S from "./Container.style";
import useResizeHandler from "@/hooks/useResizeHandler";

interface Props {
  data?: SiteEntity;
}

export const Container = ({ data }: Props) => {
  const { isMobile } = useResizeHandler();

  const [sections, setSections] = useState<ComponentEntity[]>([]);
  const [sectionNames, setSectionNames] = useState<string[]>([]);
  const [inquiry, setInquiry] = useState<ComponentEntity>();

  useEffect(() => {
    if (data?.components) {
      const sectionData = data.components.filter(
        (component) => component.componentType === ComponentType.Section
      );

      setSections(sectionData);
      setSectionNames(sectionData.map((section) => section.name));

      const inquiryData = data.components.find(
        (component) => component.componentType === ComponentType.Inquiry
      );

      if (inquiryData) {
        setInquiry(inquiryData);
        setSectionNames((prev) => [...prev, inquiryData.name]);
      }
    }
  }, [data?.components]);

  if (!data) {
    return null;
  }

  return (
    <S.Container $paddingTop={data.header?.height}>
      <Header sectionNames={sectionNames} data={data.header ?? undefined} />
      {sections.map((value: ComponentEntity, index: number) => (
        <Section key={index} id={value.name} data={value} isMobile={false} />
      ))}
      {inquiry && <Inquiry id={inquiry.name} data={inquiry} siteEmail={data.email} />}
      <Footer data={data.footer ?? undefined} />
    </S.Container>
  );
};
