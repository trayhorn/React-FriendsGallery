import './App.css';
import { useState } from 'react';
import BgSection from './components/BgSection/BgSection';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <BgSection setBackgroundColor={setBackgroundColor} />
    </div>
  );
}


export default App;
