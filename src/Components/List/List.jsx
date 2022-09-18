import React from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import "./styles.scss";



const List = () => {

    return (
        <>
            <div className="c-list">
                <Item />
            </div>
        </>
    );
};

List.propTypes = {
    addTask: PropTypes.bool,
};

export default List;