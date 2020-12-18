import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div >
        {/*Add the functionality to open the link in a new tab */}
        {/*Done by adding  target="_blank" to the a tag */}
        <a href="https://www.facebook.com/recodedofficial" target="_blank">
          <img
            src="https://drive.google.com/uc?id=1-yaPy5DZhbYsLxUP8YWjvlpIZdbzDXxl"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://www.instagram.com/recodedofficial/" target="_blank">
          <img
            src="https://drive.google.com/uc?id=18b8F06ADRb6oGVuWosRYnPPOImNt6iCI"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://twitter.com/recodedofficial" target="_blank">
          <img
            src="https://drive.google.com/uc?id=1vVXb5gSBxgwy1idaoPA6rDhc9leviMjx"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://www.linkedin.com/company/re-coded/" target="_blank">
          <img
            src="https://drive.google.com/uc?id=1Rzvd49x5LKeb8yVEGgGfuNBKqN9LXpWE"
            alt=""
            class="socialIcon"
          />
        </a>
      </div>
      <div>
        <span>
          (&copy;) 2020. Re:Coded is a 501(&copy;)(3) non-profit corporation.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
