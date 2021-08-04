import React,{ Component } from "react";
import WebProfile from "./components/WebProfile"
import "./App.css";

interface Profile {
  t:string,
  i: string,
  u: string,
  r: boolean,
}

interface AppState {
  profiles: Profile[],
}

class App extends Component<{},AppState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      profiles: [
        {t:'Twitter', i: 'fab fa-twitter', u:'https://twitter.com/0xcafebabe', r:false},
        {t:'GitHub', u:'https://github.com/wwerner', i:'fab fa-github', r:false},
        {t:'Docker Hub', u:'https://hub.docker.com/u/wernerw/', i: 'fab fa-docker', r:false},
        {t:'Xing', u:'https://www.xing.com/profile/Wolfgang_Werner3', i: 'fab fa-xing', r:false},
        {t:'LinkedIn', u:'https://www.linkedin.com/in/wolfgangwerner', i:'fab fa-linkedin-in', r:false},
        {t:'Stack Overflow',u:'https://stackoverflow.com/users/193637/wwerner', i:'fab fa-stack-overflow', r:false },
        {t:'Keybase', u:'https://keybase.io/wgw', i: 'fab fa-keybase', r:false},
        {t:'Open PGP', u:'http://hkps.pool.sks-keyservers.net/pks/lookup?search=0x469967FA&fingerprint=on', i:'fa fa-envelope', r:false},
        {t:'Goodreads', u:'https://www.goodreads.com/user/show/9593423-wolfgang', i: 'fab fa-goodreads', r:false},
        {t:'Code Sandbox', u:'https://codesandbox.io/u/wwerner', i: 'fab fa-codepen', r:false},
        {t:"36°28'49.6N 5°07'52.5W" , u:'https://maps.google.com/?q=36.480433,-5.131258&entry=gps', i: 'fab fa-map-marker', r:false},

    ]}
  }

  moreRainbow = () => {
    this.setState((state: AppState) => {
      let next = this.nextProfileToRainbow(state.profiles)
      if(next) next.r = true;
      return state
    })
  }
  
  nextProfileToRainbow(profiles: Profile[]) : Profile | undefined {
    return profiles
      .filter((p) => { return !p.r})
      .sort(() => 0.5 - Math.random())[0]
  }

  render() {
    return (
      <div className="App">
        <div className='icons'>
          { this.state.profiles.map((v) => {
            return <WebProfile key={v.t} title={v.t} icon={v.i} url={new URL(v.u)} rainbow={v.r}></WebProfile>
          })}

        <button
          title="I can haz moar rainbow?"
          onClick={this.moreRainbow}
        >
          <i
            className="fa fa-question-circle fa-fw rainbow"
          ></i>
        </button>
        </div>
      </div>
    );
  }
}

export default App;
