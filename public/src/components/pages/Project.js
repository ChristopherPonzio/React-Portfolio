import React from 'react';
import '../../assets/styles/Portfolio.css';
import { removeHyphensAndCapitalize } from '../../utils/helpers';


function Project({ project }) {
	const { name, repo, link,note } = project;

	return (
	<div className="col-lg-4">
		<div className="portfolio-box" key={name}>
			<img
				src={require(`../../assets/img/portfolio/${name}.jpg`)}
				alt={removeHyphensAndCapitalize(name)}
				className="img-thumbnail"
			/>
			<div className="portfolio-box-caption">
				<div className="portfolio-box-caption-content">
				<a href={repo} className="project-category text-faded" target="_blank" rel="noreferrer">
						<i className="fab fa-github fa-2x"> Repo</i>
					</a>
					<br />
					<a href={link} className="project-category text-faded" target="_blank" rel="noreferrer">{removeHyphensAndCapitalize(name)} Live URL</a>{' '}
					<p className = "note">{note}</p>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Project;
