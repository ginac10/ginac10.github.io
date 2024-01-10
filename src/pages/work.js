import * as React from "react";
import projects from '../work.json';
import projects2 from '../work_archive.json';
import Card from 'react-bootstrap/Card';
import { Link } from "wouter";

export default function Work() {

  
  // This keeps track if it's a mobile device
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);

  // Use effect hook to listen for window resize and update state
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  {/*const projectGallery = projects.projects.map((project, index) => (
    <tr key={index}>
      <td>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.name} style={styles.image} />
        </a>
      </td>
      <td style={styles.projectInfo}>
        <h5>{project.name}</h5>
        <p><code>{project.type}</code>. {project.description}</p>
      </td>
    </tr>
  ), []);*/}
  const notesForSupport = (
    <tr>
      {!isMobile && (
      <td>
        <a href="https://www.notesforsupport.org/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/projects/nfs.webp" alt="Notes for Support" style={styles.image} />
        </a>
      </td>
      )}
      <td style={styles.projectInfo}>
        <h5>Notes for Support</h5>
        <p>Platform that enables users to send physical letters to patients across 170+ hospitals in 40 states.</p>
        <code><a href="https://www.notesforsupport.org/" target="_blank" rel="noopener noreferrer">
          Website</a> / <a href="https://ginac.notion.site/Prettify-Note-Printer-062378b9efee47eba5d0ea50cf60db5e?pvs=4" target="_blank" rel="noopener noreferrer">
          Printing App</a> / <a href="https://ginac.popsy.site/notes-for-support" target="_blank" rel="noopener noreferrer">Story</a></code>
      </td>
    </tr>
  );
  const lingoti = (
    <tr>
      {!isMobile && (
      <td>
        <a href="https://ginac.popsy.site/lingoti" target="_blank" rel="noopener noreferrer">
          <img src="/assets/projects/lingoti.jpg" alt="Lingoti" style={styles.image} />
        </a>
      </td>
      )}
      <td style={styles.projectInfo}>
      {isMobile && (<br></br>)}
        <h5>Lingoti</h5>
        <p>Language-learning app that physically links words to familiar locations.</p>
        <code><a href="https://ginac.popsy.site/lingoti" target="_blank" rel="noopener noreferrer">
          App</a> (Flutter, Dart)</code>
      </td>
    </tr>
  );
  
  const projectGalleryArchive = projects2.projects.map((project, index) => (
    <tr key={index}>
      <td style={styles.projectInfo}>
        {project.link === "/code-request" ? (<li><b>{project.name}</b>, <Link href={"/code-request"} target="_blank" rel="noopener noreferrer">link
        </Link>: <code>{project.type}</code>. {project.description}.</li>) : (<li><b>{project.name}</b>, <a href={project.link} target="_blank" rel="noopener noreferrer">link
        </a>: <code>{project.type}</code>. {project.description}.</li>)}
      </td>
    </tr>
  ));

  return (
    <div className="page">
      <br></br><br></br><br></br>
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
          {notesForSupport}
          {lingoti}
        </tbody>
      </table>
      <br></br>
      <h2>other</h2>
      {/* Table displaying imported projects */}
      <table style={styles.projectGallery}>
        <tbody>
          {projectGalleryArchive}
        </tbody>
      </table>
      <br></br><br></br>
    </div>

    
  );
}

const styles = {
  projectGallery: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  image: {
    maxWidth: '18rem',
    height: 'auto',
    marginRight: '2rem',
    marginBottom: '1rem',
    'border-radius': '10px',
  },
  projectInfo: {
    maxWidth: '18rem', 
    wordWrap: 'break-word',
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

{/* Other projects:
  - Bubbl: https://github.com/cs160-spring2023/prog-02-programming-practice-ginac10
  - Course projects for CS161, 186 
  
  To push local gh-pages changes to gh-pages branch: git push -f origin gh-pages
*/}