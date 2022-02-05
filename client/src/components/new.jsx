import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit(browser)
        e.preventDefault();
        //make a post request to the database to create a new author
        axios.post('http://localhost:8000/api/new', {
            name,
        }) //Passes an object as created here.
            .then(res => history.push("/")) //.then and .catch are promise resolutions.
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                console.log(errorResponse.name)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);}) //Object is the actual JS Object class.
    }

    //onChange to update name.
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <input type="submit"/>
                <button onClick={() => history.push("/")}>Cancel</button>
            </form>
        </div>
    )
}