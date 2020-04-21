import styled from "styled-components";

const TwoColumnLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Left = styled.div`
  box-sizing: border-box;
  ${({ width }) => (width ? `width: ${width}%` : null)};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth}px` : null)};
`;

const Right = styled.div`
  box-sizing: border-box;
  ${({ width }) => (width ? `width: ${width}%` : null)};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth}px` : null)};
`;

TwoColumnLayout.Left = Left;
TwoColumnLayout.Right = Right;

export default TwoColumnLayout;
