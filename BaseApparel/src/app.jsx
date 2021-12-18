import React from "react";
import styles from './app.scss';

export const Application = () => {

  const [width, setWidth] = React.useState(window.innerWidth);

  const [image, setImage] = React.useState('./assets/hero-desktop.jpg');

  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  React.useEffect(() => {
    width < 1200? setImage('./assets/hero-mobile.jpg') : setImage('./assets/hero-desktop.jpg');
  },[width]);

  const clickButton = () => {
    setEmail('');
  }

  return <div className="app-container">
            <div className="logo-container">
              <img src="./assets/logo.svg" alt="Logo" />
            </div>
            <div className="image-container">
              <img src={image} alt="Image" />
            </div>
            <div className="info-container">
              <h1>We're <span>coming soon</span></h1>
              <p>Hello fellow shoppers! We're currently building our new fashion store. 
                 Add your email below to stay up-to-date with announcements and our launch deals.
              </p>
              <input maxLength="50" type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <button onClick={clickButton}><img src="./assets/icon-arrow.svg" alt="Button" /></button>
            </div>
         </div>;
}