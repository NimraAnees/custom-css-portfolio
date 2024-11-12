import React from 'react';
import "../app/styles/contact.css";
 import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="zoom-in-up">Contact me!</h2>
                <p className='contact-text' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='contact-flex' data-aos="zoom-in-up">
                 <AiOutlineMail size={30} /> nimranaz11819@gmail.com 
                </div>
                <div className='contact-flex' data-aos="zoom-in-up">
             <BsTelephone size={30} /> (021) 000-0000 

                </div>
            </div>
            <div className='contact-space' data-aos="zoom-in-up">
                <div className='form'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='input-field'
                    id='name'/>
                </div>

                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='input-field'
                    id='email'/>
                </div>

                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea 
                    className='textarea-field'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact