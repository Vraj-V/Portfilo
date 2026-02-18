import React,{useState,useRef, Suspense} from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import  Fox  from '../models/Fox';
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader';
import useAlert from '../Hooks/useAlert';
import Alert from '../components/Alert';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading,setIsLoading] = useState(false);
  const {showAlert, hideAlert, alert} = useAlert();
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showAlert({ text: 'Please fill in all fields', type: 'danger' });
      setCurrentAnimation('idle');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      showAlert({ text: 'Please enter a valid email address', type: 'danger' });
      setCurrentAnimation('idle');
      return;
    }

    // Handle form submission logic here
    setIsLoading(true);
    console.log(formData);
    setCurrentAnimation('hit');
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: "Vraj",
        from_email: formData.email,
        to_email: "vvaland6928@gmail.com",
        message: formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {      
      console.log(result.text);
      setIsLoading(false);
      showAlert({show:true, text: 'Message sent successfully!', type: 'success'});

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setFormData({
        name: '',
        email: '',
        message: ''
      });
      }, [3000]);
    }).catch((error) => {
      console.log(error.text);
      setIsLoading(false);
      showAlert({show:true, text: 'Failed to send message. Please try again later.', type: 'danger'});
      setCurrentAnimation('idle');
      // alert("Failed to send message. Please try again later.");
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert alert={alert} hideAlert={hideAlert} />}
      
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

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas camera={{ position: [0, 0, 5], fov: 70, near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} />
        <Suspense fallback={<Loader />}>
          <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.629, -0.5, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Suspense>
      </Canvas>

      </div>
    </section>
  )
}

export default Contact