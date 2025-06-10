import React, { useState } from 'react';


import { ToastContainer, toast } from 'react-toastify';

function InputData() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            toast.success(data.message);
            // alert(data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Something went wrong. Please try again later.');

            // alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className='  bg-zinc-950 p-4 text-white pb-10'>
            <div className=" flex justify-center items-center">
                <h2 className=" text-5xl max-[500px]:max-lg:text-4xl border-b-2 py-2 border-white">Let's Connect With Us</h2>
            </div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[1000px] mx-auto mt-10">
                <div className='flex max-sm:flex-wrap'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded bg-zinc-900 border-none outline-none w-full mr-2 max-sm:mr-0"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded bg-zinc-900 border-none outline-none w-full max-sm:mt-4"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    cols="20"
                    required
                    className="border p-2 rounded bg-zinc-900 border-none outline-none w-full mt-6 "
                ></textarea>
                <button type="submit" className=" flex justify-center w-fit m-auto px-6 items-center bg-zinc-700 text-white p-2 rounded mt-4 hover:bg-orange-500 ">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default InputData;
