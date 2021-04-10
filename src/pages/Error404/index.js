import React, { Component } from "react";
import { Helmet } from "react-helmet";

import seo_image from "../../img/icon512.png";

// values for meta tags
var title = "101sec - 404";
var description = "A fatal exception has occured. Are you sure you have the right link?";
var canon_url = "https://101sec.net/error404";

class Error404 extends Component {
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
                <div className="container-fluid h-100 main-bg-bsod">
                    <div className="container h-100 main-console-font">
                        <div className="row h-25"></div>
                        <div className="row h-50 align-items-center justify-content-center">
                            <div className="col-md-10">
                                <div className="d-flex justify-content-center">
                                    <p className="main-title-bsod">  Error 404  </p>
                                </div>
                                <p>Whoops! We couldn't find that page for you. There's a few reasons that could be:</p>
                                <ul>
                                    <li>The page you're trying to access doesn't exist.</li>
                                    <li>The page does exist but the wrong URL was entered.</li>
                                    <li>Our web developers are incompetent high school students that don't know anything about deploying websites.</li>
                                    <li>You're trying to hack us (in that case, the authorities have been alerted and the feds are surrounding your house at this moment <span role="img" aria-label="wink">&#128521;</span>).</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <p>Press any link to continue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error404;