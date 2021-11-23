import { useState } from "react";

function App() {
  const [valueInput, setValueInput] = useState('Hello');
  const lynx = 'lynx';

  return (
    <div>
      <input type='text' value = {valueInput} onChange={(event) => setValueInput(event.target.value)} placeholder="Введите какуюто хрень"></input>
      <button onClick={ (event) => setValueInput(lynx)}>Lynx</button>
    </div>
  );
}

export default App;
