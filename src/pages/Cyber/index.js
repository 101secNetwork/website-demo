import $ from "jquery";
import { WOW } from "wowjs";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";

import seo_image from "../../img/icon512.png";
import semifinals_2020_2 from "../../img/semifinals_2020_2.jpg";
import ncl_ida from "../../img/ncl_ida.png";
import d214 from "../../img/d214.png";

// values for meta tags
var title = "101sec - Cyber";
var description = "Learn about our cyber team and legacy.";
var canon_url = "https://101sec.net/cyber";

class Cyber extends Component {
    componentDidMount() {
        // initialize wow.js for scroll animations
        const wow = new WOW({live: false});
        var scrolled = false;
        $(window).on("scroll", function() {
            if (!scrolled) {
                scrolled = true;
                wow.init();
            }
        })
    }
    constructor(props){
        super(props)
        this.state = {}
        this.divFocus = React.createRef()
    }
    // smoothly scroll to team information
    handleOnClick = (event) => {
        if(this.divFocus.current){
            this.divFocus.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "start"
            })
        }
    }
    render() {
        return (
            <div className="main-page h-100">
                <Helmet>
                    <title>{title}</title>
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={seo_image} />
                    <meta property="og:url" content={canon_url} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@101sec" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={seo_image} />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <header className="container-fluid h-100 text-white main-bg-cyber">
                    <div className="row h-25"></div>
                    <div className="row h-50 align-items-center justify-content-center main-fade-in-up-animation">
                        <div className="col-md-6 text-center">
                            <h1>We are Cyber Team.</h1>
                            <h4>We share a common passion for information security.</h4>
                            <button className="btn btn-light" onClick={this.handleOnClick}>Scroll for More</button>
                        </div>
                    </div>
                </header>
                <div className="container-fluid bg-light">
                    <div ref={this.divFocus} className="container py-5">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-8 text-center wow main-fade-in-up-animation">
                                <h2>What is Cyber Team?</h2>
                                <p>
                                    The 101sec Cyber Team introduces high school students to the field of cybersecurity through a fun, competitive environment. 
                                    The team participates in various events that allow members to build skills in both defensive and offensive security.
                                </p>
                            </div>
                        </div>
                        <div className="card main-card wow main-fade-in-up-animation">
                            <div className="row align-items-center no-gutters">
                                <div className="col-lg-4">
                                    <img src={semifinals_2020_2} className="card-img h-100 d-none d-lg-block" alt="Semifinals 2020" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="card-body">
                                        <h3 className="card-title mb-0">CyberPatriot</h3>
                                        <p className="main-text-orange">FALL AND WINTER EVENT</p>
                                        <p>
                                            Created by the United States Air Force Association (AFA), the CyberPatriot competition focuses on securing individual computers and networks. 
                                            Teams of two to five are given virtual machines that contain numerous vulnerabilities. Points are awarded for fixing these vulnerabilities 
                                            and teams compete to earn the highest score they can within a six hour round.
                                        </p>
                                        <p>
                                            A typical season runs from September to January with three qualifying rounds. If a team is prestigious enough and qualifies, the National 
                                            Finals competition is held in March.
                                        </p>
                                        <a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.uscyberpatriot.org">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card mb-5 main-card wow main-fade-in-up-animation">
                            <div className="row h-100 align-items-center no-gutters">
                                <div className="col-lg-4 order-md-2">
                                    <img src={ncl_ida} className="card-img h-100 d-none d-lg-block" alt="NCL IDA" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="card-body">
                                        <h3 className="card-title mb-0">National Cyber League</h3>
                                        <p className="main-text-green">SPRING EVENT</p>
                                        <p>
                                            National Cyber League (NCL) is a collegiate CTF-style competition where players are given challenges that focus on digital forensics 
                                            and offensive security. These challenges vary widely, being separated into different categories. Players are given a single weekend 
                                            to capture as many flags as they can by solving challenges. There is both an Individual Game and a Team Game for two to seven players.
                                        </p>
                                        <p>
                                            The NCL competition runs twice a year, with a season in the fall and a season in the spring. The 101sec Cyber Team normally competes 
                                            in the spring season.
                                        </p>
                                        <a className="button-link" target="_blank" rel="noopener noreferrer" href="https://nationalcyberleague.org">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center wow main-fade-in-up-animation">Why join Cyber Team?</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-3 m-3 text-center wow main-fade-in-up-animation">
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex main-circle"><h1 className="text-white main-center">1</h1></div>
                                </div>
                                <p className="mx-auto main-mw-300px">Learn real skills through experience to prepare for a career or college.</p>
                            </div>
                            <div className="col-md-3 m-3 text-center wow main-fade-in-up-animation">
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex main-circle"><h1 className="text-white main-center">2</h1></div>
                                </div>
                                <p className="mx-auto main-mw-300px">Meet other people who share a passion in computers and make friends.</p>
                            </div>
                            <div className="col-md-3 m-3 text-center wow main-fade-in-up-animation">
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex main-circle"><h1 className="text-white main-center">3</h1></div>
                                </div>
                                <p className="mx-auto main-mw-300px">More importantly, it's fun and engaging to participate in competitions!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 main-bg-black text-white">
                    <h2 className="text-center main-text-blue-gradient wow main-fade-in-up-animation">Our Legacy</h2>
                    <div className="row justify-content-center wow main-fade-in-up-animation">
                        <div className="col-md-9">
                            <div className="main-timeline">
                                <h4 className="main-timeline-year wow main-fade-in-left-animation">2017</h4>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>September 2017: </strong>
                                    The 101sec Cyber Team pilots and begins competing in CyberPatriot X with two teams of five.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>December 2017: </strong>
                                    Team A finishes 3rd in the state of Illinois in the Platinum tier and Team B finishes without placing in the Gold tier. Both teams do not qualify for semifinals.
                                </p>
                                <h4 className="main-timeline-year wow main-fade-in-left-animation">2018</h4>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>April 2018: </strong>
                                    Four members of the cyber team compete in the Individual Game of the National Cyber League for the first time during the Spring 2018 season. The team's best performer places 577th out of 2452 other players. Due to registration complications, the team does not compete in the Team Game.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>October 2018: </strong>
                                    CyberPatriot XI begins. Fifteen members sorted into three teams partake in the qualifying rounds.
                                </p>
                                <h4 className="main-timeline-year wow main-fade-in-left-animation">2019</h4>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>January 2019: </strong>
                                    All three teams qualify in Platinum tier. Team A and Team B take the 2nd and 3rd state awards respectively, with Team A qualifying for semifinals and placing 77th nationally. 6300+ total teams were registered in CyberPatriot XI.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>April 2019: </strong>
                                    Ten members compete in the Individual Game of the NCL Spring 2019 season. The team's best performer finishes 60th out of 3607 other players.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>May 2019: </strong>
                                    For the NCL Spring 2019 Team Game, Team A places 61st out of 548 total teams.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>October 2019: </strong>
                                    The Cyber Team grows to eighteen with eleven new members joining for the CyberPatriot XII competition. Three teams compete in the qualifying rounds.
                                </p>
                                <h4 className="main-timeline-year wow main-fade-in-left-animation">2020</h4>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>January 2020: </strong>
                                    Team A earns 2nd place in state and qualifies for semifinals along with Team C. Team A finishes 72nd nationally and Team C finishes 174th. 6700+ teams competed in CyberPatriot XII.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>February 2020: </strong>
                                    The 101sec Discord server goes fully public. The 101sec Network Minecraft server is also launched to teach basic server administration.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>March 2020: </strong>
                                    Nine members join the NCL Spring 2020 season. Performance is highly exceptional this year, with three individuals placing 9th, 20th, and 22nd in the Preseason out of 5379 players, completing 100% of the challenges. The Individual Game also goes well, with two players earning "Top 300" medallions and the best performer placing 68th.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>April 2020: </strong>
                                    One team competes in the NCL Spring 2020 Team Game, earning 97th out of 925 other teams.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>May 2020: </strong>
                                    The 101sec Discord server reaches 100 members.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>August 2020: </strong>
                                    Our website launches to reach more members during the COVID-19 pandemic.
                                </p>
                                <p className="main-timeline-entry wow main-fade-in-left-animation">
                                    <strong>November 2020: </strong>
                                    CyberPatriot XIII begins with three teams representing 101sec.
                                </p>
                                <p className="main-timeline-present wow main-fade-in-left-animation"><em>Present day</em></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-light">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8 wow main-fade-in-up-animation">
                                <h2 className="text-center">Team Information</h2>
                                <p>
                                    For the 2020-2021 academic year, meetings are planned to be held online over Zoom or Discord on a weekly basis. Meetings will be coached by 
                                    CTE instructor Michael Drenth along with team captains and mentors.
                                </p>
                                <p>
                                    To be eligible to join the Cyber Team, you must be attending a Township High School District 214 institution. You also must be academically 
                                    eligible to participate in accordance with the D214 co-curricular code.
                                </p>
                                <div className="text-center">
                                    <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdW-UVWJi7mCYqulhamZ5NSvZL-gje00YaWD6CJBj-Sj0a-Xg/viewform?usp=sf_link">Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col">
                                <h5 className="text-center wow main-fade-in-up-animation">Thanks to our sponsor</h5>
                                <img src={d214} className="main-d214 main-center wow main-fade-in-up-animation" alt="D214" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cyber;