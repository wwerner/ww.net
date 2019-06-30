import React, { Component } from "react";

import { URL } from "url";
import "./Rainbow.css";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: string;
  rainbowy: boolean;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url, rainbowy } = this.props;
    return (
      <a
        href={url.href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={
            icon + " fa-fw" + (rainbowy ? " rainbow" : "")
          }
        ></i>
      </a>
    );
  }
}
export default WebProfile;
