import * as React from "react";
export default function Resume() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */

  return (
    
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">resume</h1>
      <p>
        Note: I've finished enough CS coursework to graduate as early as <b>Dec 2024</b> (expected), 
        and alternatively, <br></br>as late as May 2025 if I attend all 4 years. 
        These resumes are here to reflect that :)
      </p>
      
      
    </div>
  );
}

// how to add new pg:
// 1. add <silly>.js to pages
// 2. add route to router.js
//    import <Silly> from "../pages/<silly>";
//    <Route path="/<silly>" component={<Silly>} />
