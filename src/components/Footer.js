import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid main-footer py-5">
                <div className="text-center">
                    <p className="m-0">101sec &#169; 2020. All rights reserved.</p>
                    <p className="m-0">Made with <span role="img" aria-label=":love:">&#10084;&#65039;</span> by WhiteHoodHacker.</p>
                    <p className="m-0 text-secondary"><small>This is a demo of the 2020 website.</small></p>
                </div>
            </div>
        )
    }
}

export default Footer;