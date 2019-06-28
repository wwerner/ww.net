import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Url } from "url";


interface WebProfileProps  {
  title: string,
  url: Url,
  icon: string
}

class WebProfile<WebProfileProps> extends Component {
  render() {
      return <div>Flogs <FontAwesomeIcon icon="coffee" /> </div>;
  }
}
export default WebProfile;
