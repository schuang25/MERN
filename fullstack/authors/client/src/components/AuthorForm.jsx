import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const cancelForm = () => {
        history.push("/");
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {name})
            .then(res=>{
                console.log(res.data);
                props.reload();
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response.data);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }

    return (
        <>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <input type="button" onClick={cancelForm} value="Cancel" />
                    <input type="submit" value="Submit"/>
                </p>
            </form>
            <div>
                {errors.length > 0 ? errors.map((error, i) => 
                    <p style={{color: 'red'}} key={i}>{error}</p>
                )
                    : ''
                }
            </div>
        </>
    );
};

export default AuthorForm;