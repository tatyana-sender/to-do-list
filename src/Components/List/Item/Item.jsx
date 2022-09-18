import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./styles.scss";

const Item = () => {

    return (
        <>
            <div className="c-item">
                <div className="c-item__status"><input type="checkbox" /></div>
                <div className="c-item__info">
                    <div className="c-item__date">26.08.2019</div>
                    <div className="c-item__title">First task</div>
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