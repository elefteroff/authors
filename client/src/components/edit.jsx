import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/edit/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);

    const updateOneAuthors = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/edit/' + id, {
            name
        })
            .then(res => history.push("/"))
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
    
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h5>Edit this author</h5> 
            <form onSubmit={updateOneAuthors}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
                <button onClick={() => history.push("/")}>Cancel</button>
            </form>
        </div>
    )
}

export default Edit;