import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductInfo = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <>
            {loaded &&
                <div>
                    <h1>{product.title}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            }
            <Link to="/">Home</Link>
        </>
    );
}

export default ProductInfo;