import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading,setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsLoading(true);
    console.log(formData);

    emailjs.sendForm('service_opnckif', 
      'template_9maa6ip', 
      formRef.current, 'user_2XoLZt3mKzqj8aGQy7b2')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w[50%] flex flex-col'>
        <h1 className='head-text font-bold'>Get In Touch</h1>

        <form ref={formRef} action="" onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
        <label className='text-black-500 font-semibold'>Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className='p-3'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='John@email.com'
          value={formData.email}
          onChange={handleChange}
          className='p-3'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4}
            placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className='p-3 h-32 resize-none'
          onFocus={handleFocus}
          onBlur={handleBlur}   
        ></textarea>

        <button 
        type="submit" 
        className='btn'
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isLoading}
       >
        {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        </form>
      </div>
    </section>
  )
}

export default Contact