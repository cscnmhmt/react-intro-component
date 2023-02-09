import React from 'react';
import * as H from './header.module.css';

const Header = () => {
  return (
    <div className={H.header}>
      <h1 className={H.title}>Learn to code by watching others</h1>
      <p className={H.description}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
};

export default Header;
