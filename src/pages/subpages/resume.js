import * as React from "react";
export default function Resume() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */

  return (
    
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">resume</h1>
      <p>
        I'm expecting to graduate in <b>Dec 2024</b>!
      </p>
      
      
    </div>
  );
}

// how to add new pg:
// 1. add <silly>.js to pages
// 2. add route to router.js
//    import <Silly> from "../pages/<silly>";
//    <Route path="/<silly>" component={<Silly>} />
