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
            name: 'Git-There',
            link: "https://christopherponzio.github.io/Git-There-Project",
            repo: "https://github.com/ChristopherPonzio/Git-There-Project"
        },
        {
            name: 'Easter-Egg',
            link: "https://shrouded-anchorage-72534.herokuapp.com",
            repo: "https://github.com/ChristopherPonzio/Easter-Egg"
        },
        {
            name: 'Tech-Blog',
            link: "https://cryptic-castle-12751.herokuapp.com",
            repo: "https://github.com/ChristopherPonzio/Tech-Blog"
        },
        {
            name: 'Note-Taker',
            link: "https://stark-dawn-28882.herokuapp.com",
            repo: "https://github.com/ChristopherPonzio/noteTaker"
        },
        {
            name: 'Weather-Dashboard',
            link: "https://christopherponzio.github.io/Weather-Dashboard",
            repo: "https://github.com/ChristopherPonzio/Weather-Dashboard"
        },
        {
            name: 'Password-Generator',
            link: "https://christopherponzio.github.io/Password-Generator",
            repo: "https://github.com/ChristopherPonzio/Password-Generator"
        },
    ]);

    return (
        <section className="p-0">
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