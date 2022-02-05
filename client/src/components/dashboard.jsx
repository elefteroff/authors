import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/')
            .then(res=>{
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const deleteAuthors =  (deleteID) => {
        axios.delete('http://localhost:8000/api/edit/' + deleteID)
            .then(res => {
                console.log(res.data);
                //Remove from DOM after successfully deleted.
                setAuthors(authors.filter( (authors) => authors._id !== deleteID))
                setLoaded(true);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <p>
                <Link to={"/new"}>Add an author</Link> 
                <h5>We have quotes by:</h5>
                <table>
                    <thead>
                        <tr>Author</tr>
                        <tr>Actions avaiable</tr>
                    </thead>
                    <tbody>
                        {authors.map( (anAuthor, i) =>
                        <tr key={i}>{anAuthor.name}
                        <Link to={`/edit/${anAuthor._id}`}>Edit</Link>
                        <button onClick={(e)=>{deleteAuthors(anAuthor._id)}}>Delete</button>
                        </tr>
                        )}
                    </tbody>
                </table>
                <hr/>
            </p>
        </div>
    )
}

export default Dashboard;