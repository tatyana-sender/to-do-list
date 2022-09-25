import React from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import "./styles.scss";



const List = () => {

    const counter = localStorage.getItem("counter");
    //const tasks =[];

    const tasks = [
        {index: 1, data: { date: new Date().toLocaleString(), title: "Eat", checked: true },},
        {index: 2, data: { date: new Date().toLocaleString(), title: "Sleep", checked: false },},
        {index: 3, data: { date: new Date().toLocaleString(), title: "Repeat", checked: false },},
    ];


    /*for (let i = 0; i < counter; i++) {
        if(localStorage.getItem(`data_${i}`)) {
            const data = {
                key: `data_${i}`,
                data: JSON.parse(localStorage.getItem(`data_${i}`)),
            }
            tasks.push(data);
        }
    }*/

    return (
        <>
            <div className="c-list">
                {tasks.map((item, index) => {
                    return (
                        <Item key={item?.key ?? index} id={item?.key} date={item?.data?.date} titleTask={item?.data?.title} checked={item?.data?.checked} />
                    )
                })}
            </div>
        </>
    );
}

List.propTypes = {
    addTask: PropTypes.bool,
};

export default List;