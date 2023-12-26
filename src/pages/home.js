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
    width: "60%", // Image width set to 100% of its container
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
          <h1 className="title">hi, i'm gina! ♡</h1>
          <code>*｡٩(ˊωˋ*)و✧*｡</code>
          <p>
            I study CS + Data Science at Berkeley.{" "}
            <p>
              Currently, I'm doing AI research at BAIR & leading at Cal Hacks.
              I'm interning SWE @ Microsoft this summer.
            </p>
            <p>
              Previously, I won the largest hackathon in history & launched a
              healthcare platform used by 170+ hospitals.
            </p>
          </p>
          <animated.div onMouseEnter={trigger} style={style}>
            <img
              src="https://cdn.glitch.global/1f0b717f-f733-47c8-a274-948fd1ba542f/mobilepfp.jpg?v=1703196787996"
              alt="pfp" 
              className="mobile_illustration"
              style={mobileImgStyle}
            />
          </animated.div>
        </>
      ) : (
        <>
                      <div style={containerStyle}>
                          <div style={leftColumnStyle}>
                              <animated.div onMouseEnter={trigger} style={style}>
                                  <img
                                      id="pfp"
                                      src="https://cdn.glitch.global/1f0b717f-f733-47c8-a274-948fd1ba542f/pfp.png?v=1703163370419"
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
                                          Currently, I'm doing AI research at BAIR & leading at Cal
                                          Hacks. I'm interning SWE @ Microsoft this summer.
                                      </p>
                                      <p>
                                          Previously, I won the largest hackathon in history & launched
                                          a healthcare platform used by 170+ hospitals.
                                      </p>
                                  </p>
                              </div>
                          </div>
                      </div></>
      )}
    </div>
  );
}
