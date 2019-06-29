import React from "react";
import WebProfile from "./components/WebProfile"
import "./App.css";
import { faTwitter, faXing, faGithub, faLinkedinIn, faStackOverflow, faKeybase, faDocker, faGoodreadsG, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHatWizard,faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const profiles = [
  {t:'Twitter', i: faTwitter, u:'https://twitter.com/0xcafebabe'},
  {t:'GitHub', u:'https://github.com/wwerner', i:faGithub},
  {t:'Xing', u:'https://www.xing.com/profile/Wolfgang_Werner3', i: faXing},
  {t:'LinkedIn', u:'https://www.linkedin.com/in/wolfgangwerner', i:faLinkedinIn},

  {t:'Stack Overflow',u:'https://stackoverflow.com/users/193637/wwerner', i:faStackOverflow },
  {t:'Keybase', u:'https://keybase.io/wgw', i: faKeybase},
  {t:'Sourcerer.io', u:'https://sourcerer.io/wwerner', i: faHatWizard},
  {t:'Open PGP', u:'http://hkps.pool.sks-keyservers.net/pks/lookup?search=0x469967FA&fingerprint=on', i:faEnvelope},

  {t:'Docker Hub', u:'https://hub.docker.com/u/wernerw/', i: faDocker},
  {t:'Goodreads', u:'https://www.goodreads.com/user/show/9593423-wolfgang', i: faGoodreadsG},
  {t:'Code Sandbox', u:'https://codesandbox.io/u/wwerner', i: faCodepen},
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="icons-box">
      <div className='icons'>
        { profiles.map((v) => {
          return <WebProfile title={v.t} icon={v.i} url={new URL(v.u)}></WebProfile>          
        })}
        </div>
    </div>
    </div>
  );
};

export default App;
