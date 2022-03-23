import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const DeleteButton = (props) => {
    const history = useHistory();
    
    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                console.log(res.data);
                props.reload();
                history.push("/");
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <button onClick={(e) => deleteAuthor(props.id)}>Delete</button>
        </>
    );
}

export default DeleteButton;