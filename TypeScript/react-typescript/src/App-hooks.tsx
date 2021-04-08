// Source: ???

import React, { Component } from 'react';


class Context extends Component<{}, { isAuth: Boolean }> {
  readonly state = {
    isAuth: false,
  }

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth,
    }));
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

const App:React.FC = () => (
  <div>
    <Context />
  </div>
);

export default App;
