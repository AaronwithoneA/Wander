import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <header className="header">
      <HeaderContainer />
    </header>
    { children }
  </div>
);

export default App;
