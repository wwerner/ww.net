import React, { Component, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

import { URL } from 'url';
import './Rainbow.css'

interface WebProfileProps {
  title: string;
  url: URL;
  icon: IconDefinition;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url } = this.props;
    return (
      <a href={url.href} title={title} className="rainbow" target='_blank'>
        <FontAwesomeIcon icon={icon} color="rgb(230, 230, 230)" mask={faSquareFull}/>
      </a>
    );
  }
}
export default WebProfile;
