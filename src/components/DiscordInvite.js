import React, { useState, useEffect } from "react";
import "../styles/discord-invite.css";

function DiscordInvite(props) {
    const discordJsonLink = "https://discordapp.com/api/v6/invite/" + props.discordCode + "?with_counts=true";
    const [memberCount, setMemberCount] = useState("0");
    const [presenceCount, setPresenceCount] = useState("0");
    const [guildName, setGuildName] = useState("Cannot connect to Discord");
    const [iconURL, setIconURL] = useState(0);
    useEffect(() => {
        fetch(discordJsonLink)
        .then((response) => response.json())
        .then((responseJson) => {
            setMemberCount(responseJson.approximate_member_count);
            setPresenceCount(responseJson.approximate_presence_count);
            setGuildName(responseJson.guild.name);
            setIconURL("https://cdn.discordapp.com/icons/" + responseJson.guild.id + "/" + responseJson.guild.icon + ".jpg");
        })
        .catch((error) => {
            console.error(error);
        });
    });

    return (
        <div id="discordInviteBox">
            <div id="discordInvite" className="width400px">
                <h5 id="introText" className="noselect loadHidden d-none d-sm-block">YOU'VE BEEN INVITED TO JOIN A SERVER</h5>
                <h5 id="introText" className="noselect loadHidden d-block d-sm-none">YOU'VE BEEN INVITED TO JOIN</h5>
                <div id="discordData">
                    <div id="serverImg" className="loadHidden" style={{background: "url('" + iconURL + "') 50% 50% / 100% 100% repeat scroll padding-box padding-box rgb(54, 57, 63)"}}></div>
                    <div id="discordInfo">
                        <div id="serverNameBox"><a className="noselect" id="serverName" target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/" + props.discordCode}>{guildName}</a></div>
                        <div id="status" className="loadHidden">
                            <div id="statusIndicators" className="noselect"><i id="onlineInd"></i><span id="numOnline">{presenceCount} Online</span><i id="offlineInd"></i><span id="numTotal">{memberCount} Members</span></div>
                        </div>
                    </div>
                    <a id="callToAction" className="d-none d-sm-flex" target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/" + props.discordCode}>
                        <div id="buttonText" className="noselect">Join</div>
                    </a>
                </div>
                <a id="callToAction" className="d-flex d-sm-none" target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/" + props.discordCode}>
                    <div id="buttonText" className="noselect">Join</div>
                </a>
            </div>
        </div>
    )
}

export default DiscordInvite;