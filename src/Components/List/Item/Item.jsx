import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./styles.scss";

const Item = ({date, title}) => {

    return (
        <>
            <div className="c-item">
                <div className="c-item__status"><input type="checkbox" /></div>
                <div className="c-item__info">
                    <div className="c-item__date">{date}</div>
                    <div className="c-item__title">{title}</div>
                </div>
                <div className="c-item__actions">
                    <button className="c-item__button"><FaEdit /></button>
                    <button className="c-item__button"><FaTrash /></button>
                </div>
            </div>
        </>
    );
};

Item.propTypes = {
    addTask: PropTypes.bool,
};

export default Item;