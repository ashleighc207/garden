import "./App.css";
import { Category } from "./components";
import { data } from "./data";
import { AppWrapper, MainHeading, StyledHr } from "./styled";

export const App = () => {
  const vegetables = data.category?.vegetables || [];
  const herbs = data.category?.herbs || [];
  const flowers = data.category?.flowers || [];
  return (
    <AppWrapper>
      <MainHeading>Seed List</MainHeading>
      <StyledHr />
      <Category title="Vegetables" data={vegetables} />
      <Category title="Herbs" data={herbs} />
      <Category title="Flowers" data={flowers} />
    </AppWrapper>
  );
};

export default App;
