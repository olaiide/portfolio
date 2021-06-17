import React, { Fragment, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Form.css';
import Button from './Button';

const Form = () => {
   /*const [enteredName, setEnteredName] = useState('');
   const [enteredEmail, setEnteredEmail] = useState('');
   const nameChangedHandler = (e) => {
      setEnteredName(e.target.value)
   }
   const emailChangedHandler = (e) => {
       setEnteredEmail(e.target.value)
   }
   const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(enteredName, enteredEmail)
   }*/
   const [state, handleSubmit] = useForm("xdoygrjv");
   if(state.succeeded){
      return <p>Thank you for your submission</p>
   }
   return (
      <form onSubmit={handleSubmit}>
         <div className="control-group">
            <div className="form-control">
               <label htmlFor="name">Your Name</label>
               <input 
               id="name"
               type="name" 
               name="name"
               required
               />
               <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
               />
            </div>
            <div className="form-control">
               <label htmlFor="email">Your Email</label>
               <input 
               id="email"
               type="email" 
               name="email"
               required
               />
               <ValidationError 
               prefix="Email" 
               field="email"
               errors={state.errors}
               />
            </div>
            <div className="form-control">
               <label htmlFor="name">Your Message</label>
               <textarea
               id="message"
               name="message"
               required
               />
               <ValidationError 
               prefix="Message" 
               field="message"
               errors={state.errors}
               />
            </div>
            <div>
               <Button>Submit</Button>
            </div>
         </div>
      </form>
   )
}

export default Form;