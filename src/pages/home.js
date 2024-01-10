import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
 * Landing page. Responsive based on web/mobile.
 */

export default function Home() {
  const containerStyle = {
    display: "flex", // Display children in a row
    //flexDirection: "column",
    alignItems: "center", // Vertically center children
  };

  const leftColumnStyle = {
    flex: 0.9, // Take up 50% of available space
    //alignItems: "right",
  };

  const rightColumnStyle = {
    flex: 1.1, // Take up 50% of available space
  };

  const imgStyle = {
    //width: "130%", // Image width set to 100% of its container
    height: "auto", // Automatically adjust the image height
    marginLeft: "35%",
  };
  const mobileImgStyle = {
    width: "55%", // Image width set to 100% of its container
    height: "auto", // Automatically adjust the image height
    //marginLeft: "35%",
    alignItems: "center",
  };

  const textContainerStyle = {
    marginLeft: "10px",
    marginRight: "35%", // Add margin between the image and text
  };

  // This keeps track if it's a mobile device
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);

  // The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
  //   - We can attach this to events on elements in the page and apply the resulting style
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // Use effect hook to listen for window resize and update state
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page">
      {isMobile ? (
        // Content for mobile
        <>
          <br></br><br></br>
          <h1 className="title">hi, i'm gina! ♡</h1>
          <br></br>
          <p>
            I study CS + Data Science at Berkeley.{" "}
            <p>
                Currently, I'm doing AI research at BAIR & interning SWE @ Microsoft this summer.
            </p>
            <p>
                Previously, I won the <a href="https://ginac.popsy.site/global-hackathon-winner" target="_blank">largest hackathon</a> in history & launched
                a healthcare platform used by 170+ hospitals. Reach out at <b style={{color: 'rgb(23,89,142)'}}>ginac at berkeley dot edu</b>! :)
            </p>
            </p>
          <animated.div onMouseEnter={trigger} style={style}>
            <img // hosting images on glitch for now
              src="https://cdn.glitch.global/1f0b717f-f733-47c8-a274-948fd1ba542f/mobilepfp.jpg?v=1703196787996"// "assets/mobilepfp.png" 
              alt="mobile-pfp" 
              className="mobile_illustration"
              style={mobileImgStyle}
            />
          </animated.div>
          <small><code>*｡٩(ˊωˋ*)و✧*｡</code></small>
          <br></br><br></br>
        </>
      ) : (
        // On desktop
        <>
            <div style={containerStyle}>
                <div style={leftColumnStyle}>
                    <animated.div onMouseEnter={trigger} style={style}>
                        <img
                            src="https://cdn.glitch.global/1f0b717f-f733-47c8-a274-948fd1ba542f/pfp.png?v=1703163370419"//"/assets/pfp.png"
                            alt="pfp"
                            className="illustration"
                            style={imgStyle} />
                    </animated.div>
                </div>
                <div style={rightColumnStyle}>
                    <div style={textContainerStyle}>
                        {" "}
                        <h1 className="title">*｡ hi, i'm gina! ✧*｡</h1>
                        <code>*｡٩(ˊωˋ*)و✧*｡</code>
                        <p>
                            I study CS + Data Science at Berkeley.{" "}
                            <p>
                                Currently, I'm doing AI research at BAIR & interning SWE @ Microsoft this summer.
                            </p>
                            <p>
                                Previously, I won the <a href="https://ginac.popsy.site/global-hackathon-winner" target="_blank">largest hackathon</a> in history & launched
                a healthcare platform used by 170+ hospitals.
                            </p>
                            <p style={{color: 'rgb(23,89,142)'}}>Reach out at <b>ginac at berkeley dot edu</b>!</p>
                        </p>
                    </div>
                </div>
            </div>
        </>
      )}
    </div>
  );
}
// Note: create a const for the common text if there's more overlap