import React from 'react';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>List of authors:</p>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions available</td>
                    </tr>
                </thead>
                <tbody>
                    {props.authors ? 
                    props.authors.map((author, i) => 
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <DeleteButton id={author._id} reload={props.reload}/>
                            </td>
                        </tr>
                    )
                    : ''}
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;