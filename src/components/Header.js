import React from 'react';

const Header = () => {
  return (
    <header>
      {/* What is alt attribute used for? */}
      {/* Specifies an alternate text for the image, if the image for some reason cannot be displayed */}
      <img
        src="https://drive.google.com/uc?id=1ml1cDYnVse0DrPlzkG6tOuQOmDfX0_8z"
        alt="Re:Coded logo"
        class="logo"
      />
      <h1 class="title">Re:Coded</h1>
      <p class="italic">
        Re:Coded is a non-profit tech organization preparing talented youth in
        conflict-affected areas to enter the digital economy as software
        developers and tech entrepreneurs
      </p>
    </header>
  );
};

export default Header;
