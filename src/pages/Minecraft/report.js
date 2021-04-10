import $ from "jquery";
import { WOW } from "wowjs";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";

import seo_image from "../../img/icon512.png";

// values for meta tags
var title = "101sec - Report";
var description = "Report players and bugs in the 101sec Network";
var canon_url = "https://101sec.net/minecraft/report";

class feedback extends Component {
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
                <meta http-equiv="Refresh" content="0; url=https://forms.gle/ZtgKrsWRs8vEy6zVA" />
                <header className="container-fluid h-100">
                    <div className="container h-100">
                        <div className="row h-25"></div>
                        <div className="row h-50 align-items-center justify-content-center">
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </header>
                <Footer />
            </div>
        )
    }
}

export default feedback;