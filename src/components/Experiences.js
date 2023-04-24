import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position, duration, description }) => {
    return (
        <Card title={title}  footer={duration} style={{backgroundColor: '#FFF0F5'}}>
            <div>
                <h5>Description:</h5>
                <ul>
                    {description.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
           
            title: 'Integral Tech - Marrakech',
            
            duration: 'Aout 2022 - Octobre 2022',
            
            description: [
                'Développemnet d’un système de sécurité de l’envoi automatique des fiches de paie via WhatsApp',
                
            ]
        },
        
        
        
        
    ];

    return (
        <section className="section">
            <div className="experience-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="card" style={{ backgroundColor: "#f2f2f2", marginBottom: "20px" }}>
                        <ExperienceCard
                            title={experience.title}
                            
                            duration={experience.duration}
                            description={experience.description}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Experiences;
