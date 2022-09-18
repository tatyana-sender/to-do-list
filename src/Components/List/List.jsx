import React from 'react';
import PropTypes from "prop-types";


const Header = () => {

    return (
        <>
            <div className="c-header">
                <h1 className="c-header__title">To do list</h1>
                <button className="c-header__button">Add task</button>
            </div>
        </>
    );
};

Header.propTypes = {
    addTask: PropTypes.bool,
};

export default Header;