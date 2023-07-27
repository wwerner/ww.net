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
        {t:'Mastodon', u:'https://c.im/@wwerner', i: 'fab fa-mastodon', r:false},
        {t:'Matrix', u:'https://matrix.to/#/@0xcafebabe:matrix.bughome.de', i: 'far fa-square', r:false},
        {t:'LinkedIn', u:'https://www.linkedin.com/in/wolfgangwerner', i:'fab fa-linkedin-in', r:false},
        {t:'Stack Overflow',u:'https://stackoverflow.com/users/193637/wwerner', i:'fab fa-stack-overflow', r:false },
        {t:'Keybase', u:'https://keybase.io/wgw', i: 'fab fa-keybase', r:false},
        {t:'Open PGP', u:'https://keys.openpgp.org/search?q=21EA%C2%A0D18D%C2%A0238B%C2%A02D8E%C2%A099DC%C2%A0%C2%A02276%C2%A09F85%C2%A05CC3%C2%A04699%C2%A067FA', i:'fa fa-envelope', r:false},
        {t:'Goodreads', u:'https://www.goodreads.com/user/show/9593423-wolfgang', i: 'fab fa-goodreads', r:false},
        {t:'Code Sandbox', u:'https://codesandbox.io/u/wwerner', i: 'fab fa-codepen', r:false},
        {t:"YouTube" , u:'https://www.youtube.com/playlist?list=PLye53NExrIR27Z08uap4tI05A9xvN3exC', i: 'fab fa-youtube', r:false},
        {t:"wwerner.eth" , u:'https://wwerner.eth', i: 'fab fa-ethereum', r:false},

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
