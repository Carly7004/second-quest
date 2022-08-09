import FilterChoice from "./components/FilteringDisplay/FilterChoice";
import FilterDisplay from "./components/FilteringDisplay/FilterDisplay";
import Form from "./components/Form/Form";
import RefForm from "./components/Form/RefForm";
import HandlingEventInReact from "./components/HandlingEvent/HandlingEventInReact";
import MappingInReact from "./components/Mapping/MappingInReact";
import WelcomeMessageList from "./components/Mapping/WelcomeMessageList";
import Counter from "./components/useState/Counter";
import ImageUpload from "./components/useState/ImageUpload";
import ListOfThings from "./components/useState/ListOfThings";
import UseStateHook from "./components/useState/UseStateHook";



function App() {
  return (
    <div className="App">
      <MappingInReact />
      <WelcomeMessageList />
      <HandlingEventInReact />
      <UseStateHook />
      <ListOfThings />
      <Counter />
      <ImageUpload />
      <Form />
      <FilterDisplay />
      <RefForm />
      <FilterChoice />
      
    </div>
  );
}

export default App;
