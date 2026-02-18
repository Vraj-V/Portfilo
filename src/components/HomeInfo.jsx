import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

 const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
                <img src={arrow} alt="arrow" className='ml-2 w-4 h-4 object-contain '/>
        </Link>
    </div>
)

const renderContent ={
    1:(
        <h1 className='sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8  text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Vraj</span>👋
            <br />
            A Software Engineer from India.
        </h1>
    ),
    2:(
        <InfoBox 
            text="Worked with many companies and learned many skills along the journey" 
            link="/about"
            btnText="Learn more"/>
    ),
    3:(
        <InfoBox
            text="Led multiple projects to success over the year. Curious about the impact?"
            link="/projects"
            btnText="Visit my projects"/>
    ),
    4:(
        <InfoBox 
            text="Need a developer for your next project? Let's connect and create something amazing together!" 
            link="/contact" 
            btnText="Let`s talk"/>
    ),
}
const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo