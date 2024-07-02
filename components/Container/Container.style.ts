import styled from "styled-components";

export const Container = styled.div<{ $paddingTop?: number | null }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${({ $paddingTop }) => $paddingTop ?? 80}px;
`;
