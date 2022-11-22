import React from 'react';
import '../../assets/styles/Resume.css';

export default function Resume() {
  return (
    <section className="resume">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
                <h1 className="text-center">Resume</h1>
                <p className="text-center">
                   <a href="https://my.indeed.com/p/christopherp-vy7f4y9" className="indeed">View Resume</a>
                </p>
                <hr className="light my-4" />
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Git</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize, SQLite</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>MERN Stack</li>
                </ul>
            </div>
        </div>
    </div>
</section>
  );
}
