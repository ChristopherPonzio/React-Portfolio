import React, { useState } from 'react';
import Project from "./Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'Canvas-class-cancel',
            link: "",
            repo: "",
            note: "The source code and live url of this project are Private."
        },
        {
            name: 'Canvas-Schedule',
            link: "",
            repo: "",
            note: "The source code and live url of this project are Private."
        },
        {
            name: 'kineticTickets',
            link: "",
            repo: "https://github.com/mblackwellgca/Kinetic-Tickets",
            note: "Due to updates in Heroku the demo for this Project has been removed."
        },
        {
            name: 'Git-There',
            link: "https://christopherponzio.github.io/Git-There-Project",
            repo: "https://github.com/ChristopherPonzio/Git-There-Project"
        },
        {
            name: 'Easter-Egg',
            link: "",
            repo: "https://github.com/ChristopherPonzio/Easter-Egg",
            note: "Due to updates in Heroku the demo for this Project has been removed."
        },
        {
            name: 'Tech-Blog',
            link: "https://cryptic-castle-12751.herokuapp.com",
            repo: "https://github.com/ChristopherPonzio/Tech-Blog",
            note: "Due to updates in Heroku the demo for this Project has been removed."
        },
        {
            name: 'Password-Generator',
            link: "https://christopherponzio.github.io/Password-Generator",
            repo: "https://github.com/ChristopherPonzio/Password-Generator"
        },
        {
            name: 'Note-Taker',
            link: "https://stark-dawn-28882.herokuapp.com",
            repo: "https://github.com/ChristopherPonzio/noteTaker",
            note: "Due to updates in Heroku the demo for this Project has been removed."
        },
        {
            name: 'Weather-Dashboard',
            link: "https://christopherponzio.github.io/Weather-Dashboard",
            repo: "https://github.com/ChristopherPonzio/Weather-Dashboard"
        },
        {
            name: 'DashboardGrades',
            link: "",
            repo: "",
            note: "The source code and live url of this project are Private."
        },
    ]);

    return (
        <section className="portfolio p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                </div>   
            </div>
        </section>
    );
};

export default Portfolio;