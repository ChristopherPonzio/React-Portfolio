import React from 'react';
import '../../assets/styles/About.css';
import '../../assets/img/2020profilepic.jpg';

export default function About() {
  return (
    <div className= "aboutContainer">
      <h1 className = "title">About Me</h1>
      <div className = "imgContainer">
        <img 
        className = "profileImg"
        alt = "Profile"
        src ={require(`../../assets/img/2020profilepic.jpg`)}>
        </img>
      </div>
      <p id = "mainP">
      Hi, my name is Christopher Ponzio
                I am a Full Stack Developer with 2+ years experience working with JavaScript, HTML/CSS, RESTful APIs, JQuery,
                and React to build exceptional customer experiences. Highly adept at working independently and in a collaborative work environment 
                - finding solutions and determining customer satisfaction. Passionate about using programming to deliver an immersive and engaging 
                user experience through efficient web development, proactive feature optimization, and relentless debugging!
      </p>
      <p id = "secondP">
      
      </p>
    </div>
  );
}
