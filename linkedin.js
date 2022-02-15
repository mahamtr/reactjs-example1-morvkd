import React, { Component } from 'react';

export class Linkedin extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div
        style={{
          height: '300px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}
        >
          <div>
            <img
              src="https://e7.pngegg.com/pngimages/317/11/png-clipart-microsoft-windows-microsoft-icon-angle-text.png"
              style={{ height: '40px', width: '40px' }}
            />
            Microsoft
          </div>
          <div>
            With more than 3 billion people actively playing games today we
            annouced plans to acquire activision yadi yadi yada
          </div>
          <div>
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
          </div>
          <img
            src="https://c.tenor.com/qMZe3e1Er7EAAAAC/example.gif"
            style={{ height: '400px', width: '400px' }}
          />
        </div>
      </div>
    );
  }
}
