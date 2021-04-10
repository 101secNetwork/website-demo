import $ from "jquery";
import { WOW } from "wowjs";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";

import seo_image from "../../img/icon512.png";

// values for meta tags
var title = "101sec - Title";
var description = "Really cool description!";
var canon_url = "https://101sec.net/page/name";

class Boilerplate extends Component {
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
                <header className="container-fluid h-100 bg-light">
                    <div className="container h-100">
                        <div className="row h-25"></div>
                        <div className="row h-50 align-items-center justify-content-center">
                            <div className="col">
                                <h1>Hello World!</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <Footer />
            </div>
        )
    }
}

export default Boilerplate;