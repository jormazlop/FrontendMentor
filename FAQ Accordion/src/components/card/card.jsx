import React from "react";
import styles from './card.scss';

export const Card = () => {

   const [classActived, setClassActived] = React.useState(0);

   const buttonClicked = (id) => {
      classActived === id? setClassActived(0) : setClassActived(id);
   }

   return <>
          <div className="card-container-left">
            <img className="illustration" src="./assets/illustration-woman-online-desktop.svg"/>
          </div>
          <div className="card-container-right">
             <img className="illustration" src="./assets/illustration-woman-online-desktop.svg"/>
             <h1 className="title">FAQ</h1>
             <div className="question-container">
                <p className={classActived === 1? 'actived':'no-actived'}>How many team members can I invite?</p> 
                <button id="1" onClick={() => buttonClicked(1)}><img className={classActived === 1? 'actived':'no-actived'} src="./assets/icon-arrow-down.svg"/></button>
                <div className={classActived === 1? 'actived':'no-actived'}>
                   You can invite up to 2 additional users on the Free plan. There is no limit on 
                   team members for the Premium plan.
                </div>
                <hr />
             </div>
             <div className="question-container">
                <p className={classActived === 2? 'actived':'no-actived'}>What is the maximum file upload size?</p>
                <button id="2" onClick={() => buttonClicked(2)}><img className={classActived === 2? 'actived':'no-actived'} src="./assets/icon-arrow-down.svg"/></button>
                <div className={classActived === 2? 'actived':'no-actived'}>
                   No more than 2GB. All files in your account must fit your allotted storage space.
                </div>
                <hr />
             </div>
             <div className="question-container">
                <p className={classActived === 3? 'actived':'no-actived'}>How do I reset my password?</p>
                <button id="3" onClick={() => buttonClicked(3)}><img className={classActived === 3? 'actived':'no-actived'} src="./assets/icon-arrow-down.svg"/></button>
                <div className={classActived === 3? 'actived':'no-actived'}>
                  Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you.
                </div>
                <hr />
             </div>
             <div className="question-container">
                <p className={classActived === 4? 'actived':'no-actived'}>Can I cancel my subscription?</p>
                <button id="4" onClick={() => buttonClicked(4)}><img className={classActived === 4? 'actived':'no-actived'} src="./assets/icon-arrow-down.svg"/></button>
                <div className={classActived === 4? 'actived':'no-actived'}>
                  Yes! Send us a message and we’ll process your request no questions asked.
                </div>
                <hr />
             </div>
             <div className="question-container">
                <p className={classActived === 5? 'actived':'no-actived'}>Do you provide additional support?</p>
                <button id="5" onClick={() => buttonClicked(5)}><img className={classActived === 5? 'actived':'no-actived'} src="./assets/icon-arrow-down.svg"/></button>
                <div className={classActived === 5? 'actived':'no-actived'}>
                  Chat and email support is available 24/7. Phone lines are open during normal business hours.
                </div>
                <hr />
            </div>
          </div>
         </>;
}