import React from 'react';
import {
  Span,
  Icon,
  SocialMediaSection,
  Social,
  SocialDesc,
  SpanInfo,
} from './style.js';
import axios from 'axios';

class SocialMedia extends React.Component {
  state = { social: [] };
  componentDidMount() {
    axios
      .get('js/data.json')
      .then((res) => this.setState({ social: res.data.social }));
  }

  render() {
    const { social } = this.state;
    const socialList = social.map((item) => {
      return (
        <Social key={item.id} item={item.id}>
          <Icon className={item.icon}></Icon>
          <SocialDesc>
            <Span>{item.title}</Span>
            <SpanInfo>{item.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    });
    return <SocialMediaSection>{socialList}</SocialMediaSection>;
  }
}

export default SocialMedia;
