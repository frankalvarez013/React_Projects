//Made jsx for php

import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

//Pet capital is a component is created thats why its Capitalized below
//jsx needs self closing tag even if its a whatever tag like input
const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
//We are giving it a component
root.render(<App />);
