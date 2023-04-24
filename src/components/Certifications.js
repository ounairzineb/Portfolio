import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DevOps from '../assets/DevOps.jpg';
import cloud from '../assets/cloud.jpg';
import NodeJs from '../assets/NodeJs.jpg';
import reactFront from '../assets/reactFront.jpg';
import scrum from '../assets/scrum.jpg';
import bootstrap4 from '../assets/bootstrap4.jpg';


function CertificationCard(props) {
const { logo, title, issuer, date, link } = props;
return (
    
<Card className="h-100">
<Card.Img variant="top" src={logo} />
<Card.Body>
<Card.Title>{title}</Card.Title>
<Card.Text>
<span>{issuer}</span>
<br />
<span>{date}</span>
<br />
<a href={link} target="_blank" rel="noopener noreferrer">{link}
</a>

</Card.Text>
</Card.Body>
</Card>

);
}

function Certifications() {
const certifications = [
{
logo: DevOps,
title: <span className="certification-title">Introduction to DevOps</span>,
issuer: 'IBM Skills Network',
date: 'Mar 2023',
link: 'https://coursera.org/verify/HBHRFRB4QGU6'
},
{
logo: scrum,
title: <span className="certification-title">Agile Developement And Scrum</span>,
issuer: 'IBM Skills Network',
date: 'Mar 2023',
link: 'https://coursera.org/verify/CVEQ35YUTEJN'
},
{
logo: bootstrap4,
title: <span className="certification-title">Bootstrap 4</span>,
issuer: 'The Hong Kong University of Science and Technology',
date: 'Jan 2023',
link: 'https://coursera.org/verify/28W4FKNJ2BB3'
},
{
logo: reactFront,
title: <span className="certification-title">Front-End Web Development with React</span>,
issuer: 'The Hong Kong University of Science and Technology',
date: 'Jan 2023',
link: 'https://coursera.org/verify/W29PNGTAWMW8'
},
{
logo: cloud,
title: <span className="certification-title">Introduction to Cloud Computing</span>,
issuer: 'IBM Skills Network',
date: 'Mar 2023',
link: 'https://coursera.org/verify/XLWCGFZD3VMX'
},
{
logo: NodeJs,
title: <span className="certification-title">NodeJS, Express and mongoDB</span>,
issuer: 'The Hong Kong University of Science and Technology',
date: 'Jan 2023',
link: 'https://coursera.org/verify/VAT98TV937SG'
}
];


const [visibleCertifications, setVisibleCertifications] = React.useState(certifications);
const [currentPage, setCurrentPage] = React.useState(2);
const pageSize = 3;

const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight === scrollHeight) {
        setCurrentPage(currentPage + 1);
    }
}

React.useEffect(() => {
    
    const endIndex = currentPage * pageSize;
    setVisibleCertifications(certifications.slice(0, endIndex));
}, [currentPage]);

return (
    <div onScroll={handleScroll} style={{ overflowY: 'scroll', height: '500px' }}>
        <Row className="my-3">
            {visibleCertifications.map(certification => (
                <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                    <CertificationCard {...certification} />
                </Col>
            ))}
        </Row>
    </div>
);
            }
            export default Certifications;
