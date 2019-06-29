import React, { Component } from "react";

import { URL } from "url";
import "./Rainbow.css";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: string;
}

interface WebProfileState {
  isRainbowy: boolean;
}

class WebProfile extends Component<WebProfileProps, WebProfileState> {
  constructor(props: WebProfileProps) {
    super(props);
    this.state = {isRainbowy: false};
  }

  render() {
    const { title, icon, url } = this.props;
    return (
        <a href={url.href} title={title} target="_blank" rel="noopener noreferrer">
          <i className={icon + ' fa-fw' + ( this.state.isRainbowy ? ' rainbow' : '') } ></i>
        </a>
    );
  }
}
export default WebProfile;
