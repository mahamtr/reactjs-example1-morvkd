import React, { Component } from 'react';

export class Youtube extends Component {
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
          padding: '10px',
          background: 'lightgray',
          height: '225px',
          display: 'flex',
          width: '500px',
        }}
      >
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_31/3496464/210804-live-music-comeback-mb-1314.jpg"
          style={{ height: 'auto', width: '30%' }}
        />
        <div style={{ padding: '20px' }}>
          Dr. Dre, Snoop Dogg, Eminem, Mary J. Blige & Kendrick Lamar FULL Pepsi
          Super Bowl LVI Halftime Show
          <div>29,981,591 viewsFeb 13, 2022</div>
          <div>
            Check out our other channels: NFL Mundo
            https://www.youtube.com/mundonfl NFL Brasil
            https://www.youtube.com/c/NFLBrasilOf... NFL UK
            https://www.youtube.com/channel/UCVe0...{' '}
          </div>
        </div>
      </div>
    );
  }
}
