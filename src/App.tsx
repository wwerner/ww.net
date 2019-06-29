import React from "react";
import WebProfile from "./components/WebProfile"
import "./App.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='icons'>
        <WebProfile title='test' icon={faTwitter} url={new URL('https://twitter.com')}></WebProfile>
        </div>
    </div>
  );
};

export default App;
