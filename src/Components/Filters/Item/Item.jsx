import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./styles.scss";
import Popup from "../../Popup/Popup";

const Item = (props) => {

    return (
        <button>{props.name}</button>
    );
};

Item.propTypes = {
    addTask: PropTypes.bool,
};

export default Item;