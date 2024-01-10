import * as React from "react";
export default function GlobalHackathon() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */

  return (
    
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">Global Hackathon Winner</h1>
      <p>
        Youngest winner of the largest hackathon in history. 19k hackers, 175+ countries. <br></br>
        Hosted by some of the biggest names in tech, including Meta and Microsoft. <br></br><br></br>
        Links: <a href="https://devpost.com/software/covid-support" target="_blank">Project</a>, <a href="https://covid-global-hackathon.devpost.com/" target="_blank">Event Devpost</a><br></br>
        Media Interviews: SF Chronicle, ABC News
      </p>
      
      
    </div>
  );
}

// how to add new pg:
// 1. add <silly>.js file to pages
// 2. add route to router.js
//    import <Silly> from "../pages/<silly>";
//    <Route path="/<silly>" component={<Silly>} />
