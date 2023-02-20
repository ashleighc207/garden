import "./App.css";
import { Category } from "./components";
import { data, Category as CategoryType } from "./data";
import { AppWrapper, MainHeading, StyledHr } from "./styled";
import { sortAlphabeticallyByObjectKey } from "./helpers";

export const App = () => {
  return (
    <AppWrapper>
      <MainHeading>Seed List</MainHeading>
      <StyledHr />
      {data.sort(sortAlphabeticallyByObjectKey).map((data: CategoryType) => {
        const category = Object.entries(data)[0];
        return <Category title={category[0]} data={category[1]} />;
      })}
    </AppWrapper>
  );
};

export default App;
