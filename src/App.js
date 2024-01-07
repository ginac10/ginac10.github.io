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
<<<<<<< HEAD
          
=======
>>>>>>> 64d66472c96195f75a9244b35760a5c9b6327672
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

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class App extends React.Component {
    action = (txt) => {
        mobiscroll.toast({
            message: txt + ' clicked'
        });
    }
    render() {
        return (
            <div>
                <mobiscroll.Card 
                    theme="ios"  
                    themeVariant="light"
                >
                    <mobiscroll.CardHeader>
                        <mobiscroll.CardTitle>Title</mobiscroll.CardTitle>
                        <mobiscroll.CardSubtitle>Subtitle</mobiscroll.CardSubtitle>
                    </mobiscroll.CardHeader>
                    <mobiscroll.CardContent>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </mobiscroll.CardContent>
                    <mobiscroll.CardFooter>This is a footer</mobiscroll.CardFooter>
                </mobiscroll.Card>
                
                <mobiscroll.Card 
                    theme="ios"  
                    themeVariant="light"
                >
                    <mobiscroll.CardContent>
                        <mobiscroll.CardTitle>Don't forget Jenifer's birthday</mobiscroll.CardTitle>
                    </mobiscroll.CardContent>
                    <mobiscroll.CardFooter>
                        <button onClick={() => { this.action('Call') }} className="mbsc-btn-flat" data-icon="phone">Call</button>
                        <button onClick={() => { this.action('Message') }} className="mbsc-btn-flat" data-icon="bubble">Message</button>                        
                    </mobiscroll.CardFooter>
                </mobiscroll.Card>
                
                <mobiscroll.Card 
                    theme="ios"  
                    themeVariant="light"
                >
                    <img src="https://img.mobiscroll.com/demos/card_5.png" />
                    <mobiscroll.CardContent>
                        Explore the azure depths with a stay at the Manta Resort's underwater room.
                    </mobiscroll.CardContent>
                    <mobiscroll.CardFooter>
                        <button className="mbsc-btn-flat">Share</button>
                        <button className="mbsc-btn-flat">Explore</button>                        
                    </mobiscroll.CardFooter>
                </mobiscroll.Card>
            </div>
        );
    }    
}


/* Important: 
package-lock.json, added line 21 (devdependencies)
package.json, added line 44 (devdependencies)
 */