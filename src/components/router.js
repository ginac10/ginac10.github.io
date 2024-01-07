import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import Work from "../pages/work";
import Resume from "../pages/resume";
import GlobalHackathon from "../pages/subpages/global-hackathon";


/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
//    <Route path="/global-hackathon" component={GlobalHackathon}/>
    </Switch>
);

// To add a page: add to pages folder, add to router.js