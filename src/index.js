import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// Unless you know what you're doing, do NOT register the serviceWorker, otherwise, the site will be cached locally
// on client machines and updates to content won't appear without a hard refresh. I learned this the hard way.
// Plus, you won't have to put up a cookie policy on your site.
serviceWorker.unregister();