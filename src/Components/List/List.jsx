import React from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import "./styles.scss";



const List = () => {

    const counter = localStorage.getItem("counter");
    const tasks =[];

    for (let i = 0; i < counter; i++) {
        if(localStorage.getItem(`data_${i}`)) {
            const data = {
                key: `data_${i}`,
                data: JSON.parse(localStorage.getItem(`data_${i}`)),
            }
            tasks.push(data);
        }
    }

    return (
        <>
            <div className="c-list">
                {tasks.map((item, index) => {
                    return (
                        <Item key={item?.key ?? index} id={item?.key} date={item?.data?.date} title={item?.data?.title} />
                    )
                })}
            </div>
        </>
    );
};

List.propTypes = {
    addTask: PropTypes.bool,
};

export default List;