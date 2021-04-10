import $ from "jquery";
import { WOW } from "wowjs";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import LinkButton from "../../components/LinkButton";
import "../../styles/discord-invite.css";

import seo_image from "../../img/icon512.png";
import isometric_computer from "../../img/isometric_computer.png";

// values for meta tags
var title = "101sec - Home";
var description = "Expanding IT and cybersecurity to students.";
var canon_url = "https://101sec.net/";

class Home extends Component {
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
        this.getDiscordMemberCount();
    }
    constructor(props) {
        super(props);
        this.state = { 
            checking:false
        };
    }
    getDiscordMemberCount() {
        fetch("https://discordapp.com/api/v6/invite/4uv699k?with_counts=true")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({getDiscordMemberCount: responseJson.approximate_member_count});
        })
        .catch((error) => {
            console.error(error);
        });
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
                <header className="container-fluid h-100 main-bg-blue-gradient">
                    <div className="container h-100">
                        <div className="row h-25"></div>
                        <div className="row h-50 align-items-center justify-content-around main-fade-in-up-animation">
                            <div className="col-md-6">
                                <h1>Bringing infotech <br />to students.</h1>
                                <p>See how our programs give rising youth real world skills.</p>
                                <LinkButton className="btn main-btn-purple" to="/cyber">Check it</LinkButton>
                            </div>
                            <div className="col-md-6">
                                <img className="mw-100 d-none d-md-block" src={isometric_computer} alt="Computer screen" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-fluid py-5 bg-dark text-white">
                    <div className="container h-100">
                        <div className="row h-100 justify-content-center">
                            <div className="col-md-8">
                                <h1 className="main-discord-font font-weight-bold wow main-fade-in-up-animation text-center">Join us on Discord.</h1>
                                <h3 className="main-discord-font wow main-fade-in-up-animation text-center">Connect with {this.state.getDiscordMemberCount} other members.</h3>
                                <div className="d-flex justify-content-center wow main-fade-in-up-animation">
                                <a id="callToAction" target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/4uv699k">
                                    <div id="buttonText" className="noselect">Join</div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;