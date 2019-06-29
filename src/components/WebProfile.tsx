import React, { Component } from "react";

import { URL } from "url";
import "./Rainbow.css";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: string;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url } = this.props;
    return (
        <a href={url.href} title={title} target="_blank" rel="noopener noreferrer">
          <i className={icon + ' fa-fw rainbow'} ></i>
        </a>
    );
  }
}
export default WebProfile;
