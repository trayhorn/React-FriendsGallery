import './App.css';
import { useState } from 'react';
import BgSection from './components/BgSection/BgSection';
import Form from './components/HookForm/Form';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <BgSection setBackgroundColor={setBackgroundColor} />
      <Form />
    </div>
  );
}


export default App;
