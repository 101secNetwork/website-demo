import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/fonts.css";
import "./styles/main.css";

import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Cyber from "./pages/Cyber";
import Resources from "./pages/Resources";
import report from "./pages/Minecraft/report";
import Error404 from "./pages/Error404";

class App extends Component {
    render() {
        return (
            <div className="App h-100">
                <Navigation />
                <Route render={({location}) => (
                    <div>
                        <ScrollToTop />
                        <TransitionGroup className="h-100">
                            {/* Customize the CSS transition animations in main.css */}
                            <CSSTransition key={location.pathname} timeout={550} classNames="main-ripple-transition">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/cyber" component={Cyber} />
                                    <Route exact path="/resources" component={Resources} />
                                    <Route exact path="/minecraft/report" component={report} />
                                    {/* Here's an example of URL redirection, note that you'll need to include these redirects
                                        within your server application. */}
                                    <Route exact path="/report">
                                        <Redirect to="/minecraft/report" />
                                    </Route>
                                    {/* Fallback route if the React app can't match any of the specified routes */}
                                    <Route component={Error404} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )} />
            </div>
        );
    }
}

export default App;