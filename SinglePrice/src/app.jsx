import React from "react";
import styles from './app.scss';

export const Application = () => {

  return <div className="app-container">
            <div className="grid-container">
              <div className="header">
                <h1>Join our community</h1>
                <h2>30-day, hassle-free money back guarantee</h2>
                <p>Gain access to our full library of tutorials along with expert code reviews. 
                   Perfect for any developers who are serious about honing their skills.
                </p>
              </div>
              <div className="subscription">
                <h1>Monthly Subscription</h1>
                <h2>$29 <span>per month</span></h2>
                <h3>Full access for less than $1 a day</h3>
                <button>Sign Up</button>
              </div>
              <div className="faq">
                <h1>Why Us</h1>
                <p>Tutorials by industry experts</p>
                <p>Peer & expert code review</p>
                <p>Coding exercises</p>
                <p>Access to our GitHub repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
              </div>
            </div>
         </div>;
}