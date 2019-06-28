import React from "react";
import logo from "./logo.svg";
import WebProfile from "./components/WebProfile"
import "./App.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className='icons'>
        <WebProfile title='test' icon={faTwitter} url={new URL('https://twitter.com')}></WebProfile>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
