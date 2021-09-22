import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpeg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Maame Konadu</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
