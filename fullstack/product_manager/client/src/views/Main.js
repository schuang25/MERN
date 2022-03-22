import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductInfo from '../components/ProductInfo';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from 'axios';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ProductForm />
                        {loaded && <ProductList products={products}/>}
                    </Route>
                    <Route path="/:id">
                        <ProductInfo />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}