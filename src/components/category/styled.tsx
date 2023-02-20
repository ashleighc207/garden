import styled from "styled-components";

export const CategoryWrapper = styled.section`
  width: calc(100% - 10rem);
`;

export const CategoryHeading = styled.h2`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  text-transform: capitalize;
`;

export const CategorySubheading = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  margin: 1rem 0;
  line-height: 2rem;
  border-bottom: 0.5px solid #000;
  font-weight: 600;
`;

export const CategoryText = styled.p`
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const CategoryCount = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 300;
  padding-left: 0.5rem;
  border-bottom: 0.5px solid #000;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
