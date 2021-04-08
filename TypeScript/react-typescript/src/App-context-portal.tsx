// Source: https://www.youtube.com/watch?v=SaRPd9DwyoM&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode
}
class Portal extends Component<PortalProps, {}> {
  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
};

const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {},
});

class Login extends Component {
  static contextType = AuthContext;

  render() {
    const { toggleAuth, isAuth } = this.context;
    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    )
  }
}

const Profile = () => (
  <AuthContext.Consumer>
    {({ isAuth }) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

class Context extends Component<{}, { isAuth: Boolean }> {
  state = {
    isAuth: false,
  }

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth,
    }));
  }

  render() {
    const { isAuth } = this.state;

    return (
      <AuthContext.Provider value={{ isAuth, toggleAuth: this.toggleAuth }}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

const App:React.FC = () => (
  <div>
    <Portal>
      <h3>HELLO</h3>
      <h4>WORLD!</h4>
    </Portal>
    <Context />
  </div>
);

export default App;
