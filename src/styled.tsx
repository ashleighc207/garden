import styled from "styled-components";

export const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainHeading = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-top: 2rem;
  font-weight: 500;
`;

export const StyledHr = styled.hr`
  width: calc(100% - 10rem);
`;
