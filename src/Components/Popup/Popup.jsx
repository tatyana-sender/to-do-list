import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";


const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

Popup.propTypes = {
    addTask: PropTypes.bool,
};

export default Popup;