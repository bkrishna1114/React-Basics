import userEvent from "@testing-library/user-event";
import axios from "axios";
import React,{useEffect, useState} from "react";

const FetchData = () =>{
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            response => response.json()
        ).then(json_data => setData(json_data))
    },[])

    useEffect( () =>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            response => console.log(response.data)
        )
    },[])
    return(
        <div>
            <h1>To-Do List </h1>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
};

export default FetchData;