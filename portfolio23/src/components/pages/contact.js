import React, { useState } from 'react';

export default function Contact() {
    const [info, setInfo] = useState('');
    const onChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <div className='formDiv px-4'>
            <h1 className='text-center pt-3'>Contact Me</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <input onChange={onChange} type='email' name='email' className='form-control' aria-describedby='emailHelp'/>
                </div>
                <div className='form-group'>
                    <label>Name</label>
                    <input onChange={onChange} name='name' className='form-control' id='exampleInputPassword1'/>
                </div>
                <div className='form-group'>
                    <label>Message me: </label>
                    <textarea onChange={onChange} name='message' className='form-control' rows='2'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Send!🚀</button>
            </form>
        </div>
    )
};