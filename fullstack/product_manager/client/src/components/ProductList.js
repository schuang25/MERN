import React from 'react';
import {Link} from 'react-router-dom';

const PersonList = (props) => {
    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, i) =>
                <p key={product._id}>
                    <Link to={"/" + product._id}>{product.title}</Link>
                </p>
            )}
        </div>
    );
};

export default PersonList;