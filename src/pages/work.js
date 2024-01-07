import * as React from "react";
import projects from '../work.json';
export default function Work() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const projectGallery = projects.projects.map((project, index) => (
    <tr key={index}>
      <td>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.name} style={styles.image} />
        </a>
      </td>
      <td>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </td>
    </tr>
  ));

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
      {/* Table displaying imported projects */}
      <table style={styles.projectGallery}>
        <thead><b>featured projects</b>{/*<tr><th>featured projects</th></tr>*/}
        </thead>
        <tbody>
          {projectGallery}
        </tbody>
      </table>
      {/* Adding spacing to bottom */}
      <br></br>


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
    maxWidth: '100%',
    height: 'auto',
  },
  link: {
    color: '#4D868C',
    textDecoration: 'none',
    display: 'block',
    marginTop: '1px',
    fontSize: '14px',
  },
};