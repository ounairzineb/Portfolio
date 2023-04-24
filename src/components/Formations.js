import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Cycle d'ingénieurie Informatique",
            etablissement: "École Marocaine des Sciences de l'Ingénieur - EMSI",
            annees: "2020 - Aujourd'hui",
        },
        {
            diplome: "BAC +2",
            etablissement: "Faculté des Sciences Semlaliya Marrakech - FSSM",
            annees: "2020",
        },
        {
            diplome: "Baccaleauréat - Sciences Expérimentales option Physique",
            etablissement: "Lycée Qadi Ayad, Marrakech",
            annees: "2017",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3" style={{backgroundColor: '#FFF0F5'}}>
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
