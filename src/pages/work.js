import * as React from "react";
import projects from '../work.json';
import projects2 from '../work_archive.json';
import Card from 'react-bootstrap/Card';

function Work() {
  const projectGallery = projects.projects.reduce((acc, project, index) => {
    if (index % 2 === 0) {
      const project1 = project;
      const project2 = projects.projects[index + 1];

      acc.push(
        <tr key={index}>
          <td>
            <Card style={styles.card}>
            <a href={project1.link} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project1.image} alt={project1.name} />
            </a>
            <Card.Body>
              {/*<Card.Title><a href={project1.link} target="_blank" rel="noopener noreferrer">{project1.name}</a></Card.Title>*/}              
              <Card.Title>{project1.name}</Card.Title>
              <Card.Text>{project1.description}</Card.Text>
              {/*<Card.Link href={project1.link} target="_blank" rel="noopener noreferrer">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
            </Card>
          </td>

          {project2 && (
            <td>
            <Card style={{ width: '18rem' }}>
            <a href={project2.link} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project2.image} alt={project2.name} />
            </a>
            <Card.Body>
              <Card.Title>{project2.name}</Card.Title>
              <Card.Text>{project2.description}</Card.Text>
              <Card.Link href={project2.link} target="_blank" rel="noopener noreferrer">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
          </td>
          )}
        </tr>
      );
    }
    return acc;
  }, []);


  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">work</h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        i’ve previously been interviewed by ABC, CBS, and the SF Chronicle. <br></br>my
        work has also been featured on <a href="https://developers.facebook.com/blog/post/2020/12/21/reflecting-year-innovation-developer-creator-ecosystem/" target="_blank">Facebook Developers</a> and NBC Los Angeles.
        {/*<br></br>
        my portfolio can be found on my <a href="https://www.linkedin.com/in/ginac10/" target="_blank">Linkedin</a>.*/}
      </p><br></br>

      <h2>featured projects</h2>
      {/* Table displaying imported projects */}
      <table style={styles.projectGallery}>
        <tbody>
          {projectGallery}
        </tbody>
      </table>

      {/* Adding spacing to bottom */}
      <br></br>
    </div>

    
  );
}

export default Work;

const styles = {
  projectGallery: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
  },
  card: {
    width: '18rem'
  },
};


{/* Card from: https://react-bootstrap.netlify.app/docs/components/cards/
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
*/}