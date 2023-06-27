import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current);

        emailjs.sendForm('service_toc6zua', 'template_g1ihqbg', form.current, 'ALzRrFeI7Op0rUoUL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl text-center font-semibold my-10'>Leave A Message</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex justify-center gap-20'>
                    <div  className='flex flex-col gap-8'>
                        <div>
                            <label className="block ">Name</label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" />

                        </div>
                        <div>
                            <label className="block">Email</label>
                            <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" />

                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="block">Message</label>
                        <textarea className="textarea textarea-primary w-72 "  name="message" />
                        <input className='btn' type="submit" value="Send" />

                    </div>
                </div>



                
            </form>

        </div>
    );
};

export default Contact;