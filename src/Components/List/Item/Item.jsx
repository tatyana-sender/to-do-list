import React from 'react';
import PropTypes from "prop-types";


const List = () => {

    return (
        <>
            <div className="c-list">
                <h1 className="c-header__title">To do list</h1>
                <button className="c-header__button">Add task</button>
            </div>
        </>
    );
};

List.propTypes = {
    addTask: PropTypes.bool,
};

export default List;