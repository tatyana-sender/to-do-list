import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./styles.scss";
import Popup from "../../Popup/Popup";

const Item = ({date, titleTask, id, checked}) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [title, setTitle] = useState(() => {
        const saved = localStorage.getItem(`data_${id}`);
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        const data = {
            title: title,
            date: new Date().toLocaleString(),
            checked: false
        };
        localStorage.setItem(`data_${id}`, JSON.stringify(data));
    }, [title]);

    const deleteTask = () => {
        localStorage.removeItem(`${id}`);
    }

    return (
        <>
            <div className="c-item" id={id}>
                <input type="checkbox" className="c-item__status" defaultChecked={checked} />
                <div className="c-item__info">
                    <div className="c-item__date">{date}</div>
                    <div className="c-item__title">{titleTask}</div>
                </div>
                <div className="c-item__actions">
                    <button className="c-item__button" onClick={togglePopup}><FaEdit /></button>
                    <button className="c-item__button" onClick={deleteTask}><FaTrash /></button>
                </div>
            </div>
            {isOpen && <Popup
                content={
                    <form>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Task"
                        />
                        <button type="submit">Edit task</button>
                    </form>
                }
                handleClose={togglePopup}
            />}
        </>
    );
};

Item.propTypes = {
    addTask: PropTypes.bool,
};

export default Item;