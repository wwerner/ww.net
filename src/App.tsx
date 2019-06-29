import React from "react";
import WebProfile from "./components/WebProfile"
import "./App.css";

const profiles = [
  {t:'Twitter', i: 'fab fa-twitter', u:'https://twitter.com/0xcafebabe'},
  {t:'GitHub', u:'https://github.com/wwerner', i:'fab fa-github'},
  {t:'Docker Hub', u:'https://hub.docker.com/u/wernerw/', i: 'fab fa-docker'},
  {t:'Xing', u:'https://www.xing.com/profile/Wolfgang_Werner3', i: 'fab fa-xing'},
  {t:'LinkedIn', u:'https://www.linkedin.com/in/wolfgangwerner', i:'fab fa-linkedin-in'},

  {t:'Stack Overflow',u:'https://stackoverflow.com/users/193637/wwerner', i:'fab fa-stack-overflow' },
  {t:'Keybase', u:'https://keybase.io/wgw', i: 'fab fa-keybase'},
  {t:'Sourcerer.io', u:'https://sourcerer.io/wwerner', i: 'fa fa-hat-wizard'},
  {t:'Open PGP', u:'http://hkps.pool.sks-keyservers.net/pks/lookup?search=0x469967FA&fingerprint=on', i:'fa fa-envelope'},

  {t:'Goodreads', u:'https://www.goodreads.com/user/show/9593423-wolfgang', i: 'fab fa-goodreads'},
  {t:'Code Sandbox', u:'https://codesandbox.io/u/wwerner', i: 'fab fa-codepen'},
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='icons'>
        { profiles.map((v) => {
          return <WebProfile title={v.t} icon={v.i} url={new URL(v.u)}></WebProfile>
        })}
      </div>
    </div>
  );
};

export default App;
