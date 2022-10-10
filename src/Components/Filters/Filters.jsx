import React, {useState} from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import "./styles.scss";

const Filters = (props) => {
    const tasks = props.tasks;
    //console.log(props.tasks, 'tsas')

    //const [tasks, setTasks] = useState(props.tasks);

    /*for (let i = 0; i < counter; i++) {
        if(localStorage.getItem(`data_${i}`)) {
            const data = {
                key: `data_${i}`,
                data: JSON.parse(localStorage.getItem(`data_${i}`)),
            }
            tasks.push(data);
        }
    }*/

   // const [tasks, setTasks] = useState(props.tasks);


    //props.tasks.sort((a, b) => a.data.date > b.data.date ? 1 : -1);
    //props.tasks.sort((a, b) => a.data['date'] > b.data['date'] ? -1 : 1);
    //props.tasks.sort((a, b) => a.data.title > b.data.title ? 1 : -1);
    //props.tasks.sort((a, b) => a.data.title > b.data.title ? -1 : 1);
    //props.tasks.sort((a, b) => a.data.checked ? -1 : 1);
    //props.tasks.sort((a, b) => a.data.checked ? 1 : -1);



    return (
        <>
            <div className="c-filter">
                <Item name="title" />
                <Item name="date" />
            </div>
        </>
    );
};

Filters.propTypes = {
    tasks: PropTypes.array,
};

export default Filters;