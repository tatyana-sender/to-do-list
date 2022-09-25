import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Popup from '../Popup/Popup';
import "./styles.scss";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    let counter = Number(localStorage.getItem("counter")) || 0;
    const addTask = () => {
        counter += 1;
        localStorage.setItem("counter", JSON.stringify(counter));
    }
    const [title, setTitle] = useState('');
    useEffect(() => {
        const data = {
            title: title,
            date: new Date().toLocaleString(),
            checked: false
        };
        localStorage.setItem(`data_${counter}`, JSON.stringify(data));
    }, [title]);

    return (
        <>
            <div className="c-header">
                <h1 className="c-header__title">To do list</h1>
                <button className="c-header__button" onClick={togglePopup}>+ Add task </button>
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
                        <button type="submit" onClick={addTask}>Add task</button>
                    </form>
                }
                handleClose={togglePopup}
            />}
        </>
    );
};

Header.propTypes = {
    addTask: PropTypes.bool,
};

export default Header;