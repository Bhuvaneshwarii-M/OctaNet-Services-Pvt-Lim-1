import React from 'react';
import Me from './Me.png';
import './About.css';

function About() {
  return (
    <>
      <div className='header'>
        <ul><li>Home</li><li>Contacts</li></ul>
      </div>
      <div className='AboutMe'>
        <img src={Me} alt='Me' />
        <h1>Full Stack Web Developer</h1>
        <p>I developed a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It's a dynamic platform with features like user authentication, CRUD operations, and real-time updates. My role included designing the database schema, implementing RESTful APIs, building interactive user interfaces with React, and deploying the application.</p>
      </div>
      
      <div className='Contacts'>
        <div className='email'><h4>bhuvaneshwarideveloper@gmail.com</h4></div>
        <div className='lnlink'><h4><a href="https://www.linkedin.com/in/bhuvaneshwari05" target="_blank" rel="noopener noreferrer">MY LinkedIn Link</a></h4></div>
        <div className='github'><h4><a href="https://github.com/Bhuvaneshwarii-M" target="_blank" rel="noopener noreferrer">My GitHub</a></h4></div>
        
      </div>
     
    </>
  );
}

export default About;
