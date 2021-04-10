import $ from "jquery";
import { WOW } from "wowjs";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import DiscordInvite from "../../components/DiscordInvite";

import seo_image from "../../img/icon512.png";

// values for meta tags
var title = "101sec - Resources";
var description = "A collection of public resources that have proven to be useful in practical scenarios.";
var canon_url = "https://101sec.net/resources";

class Resources extends Component {
    componentDidMount() {
        // initialize wow.js for scroll animations
        const wow = new WOW({live: false});
        var scrolled = false;
        $(window).on("scroll", function() {
            if (!scrolled) {
                scrolled = true;
                wow.init();
            }
        });
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
                <header className="container-fluid h-100 text-white bg-dark">
                    <div className="container h-100">
                        <div className="row h-25"></div>
                        <div className="row h-50 align-items-center justify-content-center main-fade-in-up-animation">
                            <div className="col-md-9">
                                <h1 className="main-discord-font font-weight-bold d-none d-sm-block">The best resource is the community.</h1>
                                <h2 className="main-discord-font font-weight-bold d-block d-sm-none">The best resource is the community.</h2>
                                <h3 className="main-discord-font">Connect with mentors, alumni, and students by joining our Discord server.</h3>
                                <DiscordInvite discordCode="4uv699k" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-fluid bg-light">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8 wow main-fade-in-up-animation">
                                <h2 className="text-center">Resources</h2>
                                <p>
                                    Here, you can find publicly available resources pertaining to each skillset. Compiled by our Cyber Team, these sites have proven to be 
                                    useful even in the most practical scenarios. <em>Note: this list is not fully updated as the page is still under construction.</em>
                                </p>
                                <p>
                                    101sec Cyber Team members can access team restricted material on our private GitHub repos and shared Google Drive folder. Please contact 
                                    your team captain for access to these documents.
                                </p>
                            </div>
                        </div>
                        <div className="card-deck">
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">System Administration</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.stigviewer.com/stigs">Security Technical Implementation Guides (STIGs)</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.cisecurity.org/cis-benchmarks/">CIS Benchmarks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Forensics</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://tomeko.net/online_tools/file_to_hex.php?lang=en">File to Hex</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://osric.com/chris/steganography/decode.html">Image Stego (White Space)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Cryptography</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.boxentriq.com/code-breaking/cipher-identifier">Cipher Identifier</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://gchq.github.io/CyberChef/">CyberChef</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://onlineasciitools.com/convert-arbitrary-base-to-ascii">Arbitrary Base to ASCII</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://crypto.interactive-maths.com/frequency-analysis-breaking-the-code.html">Character Frequency Analysis</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.simonsingh.net/The_Black_Chamber/substitutioncrackingtool.html">Substitution Cracking</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Hashing and Passwords</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://crackstation.net/">CrackStation (multiple hash types)</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="http://rainbowtables.it64.com/">LM Hash Cracker</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://passwordrecovery.io/zip-file-password-removal/">ZIP File Password Cracker</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Networking</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/command/Cisco_IOS_Configuration_Fundamentals_Command_Reference.pdf">Cisco IOS Command Reference</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Enumeration and Scanning</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/thesp0nge/enchant/master/db/directory-list-2.3-medium.txt">DirBuster Medium Wordlist</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Reverse Engineering</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.hex-rays.com/products/ida/support/download_freeware/">Interactive Disassembler (IDA)</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://ghidra-sre.org/">NSA GHIDRA</a></li>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://www.tutorialspoint.com/assembly_programming/assembly_conditions.htm">Assembly Conditions Reference</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-4 main-card wow main-fade-in-up-animation">
                                <div className="card-body">
                                    <h4 className="card-title">Web App Exploitation</h4>
                                    <ul>
                                        <li><a className="btn-link" target="_blank" rel="noopener noreferrer" href="https://github.com/infoslack/awesome-web-hacking">Awesome Web Hacking</a></li>
                                    </ul>
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

export default Resources;