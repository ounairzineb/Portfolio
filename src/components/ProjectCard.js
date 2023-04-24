import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: "Application mobile de Pokemon avec API",
        description: "Afficher la liste de Pokémon et obtenir ces détails.",
        link: "https://github.com/ounairzineb/PokemonAPI"
    },
    {
        name: "Application mobile pour la conversion ",
        description: "Convertir DH --> USD",
        link: "https://github.com/ounairzineb/Convert_DH_TO_USD"
    },
    
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card" style={{backgroundColor: '#FFF0F5'}}>
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.description && <Card.Subtitle className="project-school">{project.description}</Card.Subtitle>}
                        <Card.Link href={project.link} className="project-link">Voir le projet</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCard;
