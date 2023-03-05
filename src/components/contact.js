import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;
    const [ errorMessage, setErrorMessage ] = useState("");

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return( 
        <section className="contact">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input type='email' defaultValue={name} onBlur={handleChange} name='name'/>
                </div>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email'/>
                </div>
                <div className="input">
                    <label htmlFor="message">Message</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5'/>
                </div>
                {errorMessage && (
                    <div>
                         <p className="error-text">{errorMessage}</p>
                         </div>
                         )}
                         <button type="submit" id="submitform">Submit</button>
            </form>
        </section>
    )
                }
                export default Contact;