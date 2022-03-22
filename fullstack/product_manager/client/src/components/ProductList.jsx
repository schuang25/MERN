import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) => {
    const history = useHistory();

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                console.log(res.data);
                props.update();
                history.push("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, i) =>
                <p key={product._id}>
                    <Link to={"/" + product._id}>{product.title}</Link> 
                    <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </p>
            )}
        </div>
    );
};

export default PersonList;