import {
  CategoryHeading,
  CategorySubheading,
  CategoryWrapper,
  CategoryText,
  FlexRow,
  FlexColumn,
  CategoryCount,
} from "./styled";

type CategoryProps = {
  title: string;
  data: any;
};
export const Category = ({ title, data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <CategoryHeading>{title}</CategoryHeading>
      {data
        ?.sort((a: any, b: any) => {
          return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
        })
        ?.map((item: { ["string"]: [] }) => {
          return (
            <>
              <FlexRow>
                <CategorySubheading>{Object.keys(item)}</CategorySubheading>
                <CategoryCount>{`(${
                  Object.values(item)[0]?.length
                })`}</CategoryCount>
              </FlexRow>
              <FlexColumn>
                {Object.values(item)[0]
                  ?.sort()
                  ?.map((value: string) => {
                    return <CategoryText>{value}</CategoryText>;
                  })}
              </FlexColumn>
            </>
          );
        })}
    </CategoryWrapper>
  );
};
