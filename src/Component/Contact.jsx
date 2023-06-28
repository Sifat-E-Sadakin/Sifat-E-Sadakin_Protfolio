import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current);
       

        emailjs.sendForm(import.meta.env.VITE_ST, import.meta.env.VITE_TT, form.current, import.meta.env.VITE_PT)
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mail Sent Successfully To Sifat-E-Sadakin',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                   
                  })
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='container mx-auto my-10'>
            <h1 className='text-3xl text-center font-semibold my-10'>Leave A Message</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col md:flex-row justify-center gap-20'>
                    <div  className='flex flex-col gap-8'>
                        <div>
                            <label className="block ">Name</label>
                            <input required placeholder='Your Name' className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" />

                        </div>
                        <div>
                            <label className="block">Email</label>
                            <input required placeholder='Your Email' className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" />

                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="block">Message</label>
                        <textarea required placeholder='Message' className="textarea textarea-primary w-72 "  name="message" />
                        <input className='btn' type="submit" value="Send" />

                    </div>
                </div>



                
            </form>

        </div>
    );
};

export default Contact;