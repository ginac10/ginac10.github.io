import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.js";

// The component that adds our Meta tags to the page
import Seo from './components/seo.js';

import img1 from './/assets/linkedin.PNG';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">home</Link>
          <span className="divider">|</span>
          <Link href="/work">work</Link>
          
        </div>
        <div className="redirect" style={{color: 'rgb(23,136,142)'}}>
          made with <a href="https://github.com/ginac10/ginac10.github.io" target="_blank" style={{color: 'rgb(23,136,142)'}}>♥</a>
        </div>
        <a
          className="btn--remix"
          target="_blank"
          href="https://www.linkedin.com/in/ginac10/"
        >
          <img src={img1} alt="" /></a>
      </footer>
    </Router>
  );
}



/* Important: 
package-lock.json, added line 21 (devdependencies)
package.json, added line 44 (devdependencies)
 */