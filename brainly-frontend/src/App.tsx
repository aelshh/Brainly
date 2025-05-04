import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        variant="Primary"
        onClick={() => {}}
        size={"sm"}
        text={"Share"}
        startIcon={<PlusIcon size="sm" />}
        endIcon={<PlusIcon size="md"></PlusIcon>}
      ></Button>
      <Button
        variant="Secondary"
        onClick={() => {}}
        size={"md"}
        text={"Add Content"}
      ></Button>
      <Button
        variant="Secondary"
        onClick={() => {}}
        size={"lg"}
        text={"Add Content"}
      ></Button>
    </>
  );
}

export default App;
