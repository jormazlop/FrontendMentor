import React from "react";
import styles from './card.scss';
import { useForm } from "react-hook-form";

export const Card = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();

   const formatEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   const handleReset = () => {
       Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
   };

   const onSubmit = (data) => {
       handleReset();
   }

   const mailError = (error) => {

       let message = "";

       if(error.type === "required") {
           message  = "This field is required";            
       }

       if(error.type === "pattern") {
              message  = "Mail no valid";            
       }
       
       return message;
   }

   return <div className="card">
            <div className="title">Try it free 7 days then $20/mo. thereafter</div>
            <div className="body">
              <form onSubmit={handleSubmit(onSubmit)}>
                     <input id="name" 
                            className={errors.name? "name error-input" : "name"}
                            type="text" 
                            placeholder="Name" 
                            maxLength="20" 
                            onChange={(e) => setName(e.target.value)}
                            {...register("name", { required: true })}/>
                      {errors.name && <span className="error">This field is required</span>}
                     <input id="lastname" 
                            className={errors.lastname? "lastname error-input" : "lastname"}
                            type="text" 
                            placeholder="Last Name" 
                            maxLength="20"
                            onChange={(e) => setLastName(e.target.value)}
                            {...register("lastname", { required: true })}/>
                     {errors.lastname && <span className="error">This field is required</span>}
                     <input id="email" 
                            className={errors.email? "email error-input" : "email"}
                            type="text" 
                            placeholder="Email Address" 
                            maxLength="20"
                            onChange={(e) => setEmail(e.target.value)}
                            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                            />
                     {errors.email && <span className="error">{mailError(errors.email)}</span>}
                     <input id="password" 
                            className={errors.password? "password error-input" : "password"} 
                            type="password" 
                            placeholder="Password" 
                            maxLength="20"
                            onChange={(e) => setPassword(e.target.value)}
                            {...register("password", { required: true })}/>
                     {errors.password && <span className="error">This field is required</span>}
                     <button type="submit">Claim your free trial </button>
                     <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
               </form>

            </div>
          </div>;
}