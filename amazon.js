import React, { Component } from 'react';

export class Amazon extends Component {
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
          background: 'white',
          height: '400px',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src="https://www.climaxcomputer.com/wp-content/uploads/2019/11/mbp16touch-silver-gallery1-201911_1_1.png"
          style={{ height: 'auto', width: '100%' }}
        />
        <div style={{ padding: '20px' }}>
          Apple MacBook Pro 16″ MVVM2 2020 Silver 1TB 2.3GHz with Touch Bar
          <div>{this.props.subtitle}</div>
          <div>
            <img
              src="https://media.istockphoto.com/vectors/three-star-rating-illustration-vector-vector-id1169299632?k=20&m=1169299632&s=170667a&w=0&h=i-jYTw_JTOjuDwY0LezLYhaO4V2Euy8uYbfnBs5wj40="
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
          <div>7,499.00</div>
        </div>
      </div>
    );
  }
}
