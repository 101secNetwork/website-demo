import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        ) {
            setTimeout(function(){
                window.scrollTo(0, 0);
            },525);
        }
    }
    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);