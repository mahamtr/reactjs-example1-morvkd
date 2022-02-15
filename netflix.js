import React, { Component } from 'react';

export class Netflix extends Component {
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
          color: 'white',
          background: 'black',
          height: '300px',
          width: '800px',
          display: 'flex',
        }}
      >
        <div style={{ padding: '20px' }}>
          I am legend
          <div>"SUBTITL:E"</div>
          <div>
            <button type="button">Play!</button>
            <button type="button">My List!</button>
            <button type="button">Like!</button>
            <button type="button">Dislike!</button>
          </div>
          <div>
            After a global catastrophe, a military scientist fights for survival
            in a deserted New York City teeming with nocturnal, bloodthirsty
            mutants.
          </div>
        </div>
        <img
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZ7OcQF1RarMBIes6_XqNB-fW4yCVErn9mB9XFmWRig6SIjveyD29eSMEJBwhix6yDynfSLqvYJ0rcXqTETMkrd5tORH.jpg?r=e66"
          style={{ height: 'auto', width: '50%' }}
        />
      </div>
    );
  }
}
