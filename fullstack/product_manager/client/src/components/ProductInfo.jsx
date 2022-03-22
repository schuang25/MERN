import {useParams} from 'react-router';
import {Link, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductInfo = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const deleteItem = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                console.log(res.data);
                props.update();
                history.push("/");
            })
            .catch(err => console.error(err));
    }

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
            <p><Link to={"/" + product._id + "/edit"}>Edit</Link></p>
            <form onSubmit={deleteItem}>
                <input type="submit" value="Delete"/>
            </form>
            <p><Link to="/">Home</Link></p>
        </>
    );
}

export default ProductInfo;