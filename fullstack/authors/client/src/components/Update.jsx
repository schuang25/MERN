import {Link, useParams, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const cancelForm = () => {
        history.push("/");
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res.data);
            setName(res.data.name);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {name})
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
            <p>Edit this author:</p>
            {loaded && <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <input type="button" onClick={cancelForm} value="Cancel"/>
                    <input type="submit" value="Submit"/>
                </p>
            </form>}
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

export default Update;