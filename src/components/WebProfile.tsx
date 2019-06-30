import React, { Component } from "react";

import { URL } from "url";
import "./Rainbow.css";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: string;
  rainbow: boolean;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url, rainbow } = this.props;
    return (
      <a
        href={url.href}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={
            icon + " fa-fw" + (rainbow ? " rainbow" : "")
          }
        ></i>
      </a>
    );
  }
}
export default WebProfile;
