import React from 'react';
import '../../assets/styles/About.css';

export default function About() {
  return (
    <div className = "cont">
      <div className="name">
        Christopher Ponzio
      </div>
      <div className= "aboutContainer">
        <div className = "imgContainer">
          <img 
            className = "profileImg"
            alt = "Profile"
            src ={require(`../../assets/img/2020profilepic.jpg`)}>
          </img>
        </div>
        <div className ="aboutMeContainer">
          <h1 className = "title">About Me</h1>
          <p id = "mainP">
          Hi,
          I am a Full Stack Developer with 2+ years experience working with JavaScript, HTML/CSS, RESTful APIs, JQuery, SQL and Mongo Databases,
          and React to build exceptional customer experiences. I have 1 year of Angular, and Azure experience. I am familiar with C# and .NET. Highly adept at working independently and in a collaborative work environment 
          - finding solutions and determining customer satisfaction. Passionate about using programming to deliver an immersive and engaging 
          user experience through efficient web development, proactive feature optimization, and relentless debugging!
          </p>
          <h6>
          Email me at:  <a href="mailto:chrisponz11@gmail.com"> chrisponz11@gmail.com</a>
          </h6>
        </div>
      </div>
    </div>
  );
}
