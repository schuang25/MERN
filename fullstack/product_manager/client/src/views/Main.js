import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductInfo from '../components/ProductInfo';
import ProductEdit from '../components/ProductEdit';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from 'axios';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [updated, setUpdated] = useState(false);

    const updateList = () => {
        setUpdated(true);
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
                setUpdated(false);
            })
            .catch(err => console.error(err));
    }, [, updated]);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ProductForm update={updateList}/>
                        {loaded && <ProductList products={products} update={updateList}/>}
                    </Route>
                    <Route exact path="/:id">
                        <ProductInfo update={updateList}/>
                    </Route>
                    <Route exact path="/:id/edit">
                        <ProductEdit />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}