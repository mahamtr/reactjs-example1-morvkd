import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Youtube } from './youtube.js';
import { Amazon } from './amazon.js';
import { Netflix } from './netflix.js';
import { Linkedin } from './linkedin.js';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Youtube />
          <Youtube />
          <Youtube />
          <div style={{ display: 'flex' }}>
            <Amazon />
            <Amazon />
            <Amazon />
          </div>
        </div>

        <div>
          <Netflix />
          <Netflix />
          <Netflix />
        </div>
        <div>
          <Linkedin /> <Linkedin /> <Linkedin />
        </div>
      </div>
    );
  }
}

render(<Home />, document.getElementById('root'));
