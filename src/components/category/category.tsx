import {
  CategoryHeading,
  CategorySubheading,
  CategoryWrapper,
  CategoryText,
  FlexRow,
  FlexColumn,
  CategoryCount,
} from "./styled";
import { sortAlphabeticallyByObjectKey } from "../../helpers";

type CategoryProps = {
  title: string;
  data: any;
};

export const Category = ({ title, data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <CategoryHeading>{title}</CategoryHeading>
      {data
        ?.sort(sortAlphabeticallyByObjectKey)
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
