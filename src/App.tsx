import { useState } from "react";
import Form from "./widgets/Form";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>My Notes</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
