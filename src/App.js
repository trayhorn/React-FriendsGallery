import './App.css';
import { Component } from 'react';
import BgSection from './components/BgSection/BgSection';

class App extends Component {


  render() {
    return (
      <div className="App" onClick={this.showCurrentClick}>
        <h1>Choose the background</h1>
        <BgSection />
      </div>
    );
  }
}

export default App;
