import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { URL } from "url";

interface WebProfileProps {
  title: string;
  url: URL;
  icon: IconDefinition;
}

class WebProfile extends Component<WebProfileProps> {
  render() {
    const { title, icon, url } = this.props;
    return (
      <a href={url.href} title={title}>
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  }
}
export default WebProfile;
