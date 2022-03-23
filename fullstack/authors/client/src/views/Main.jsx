import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from 'axios';

import AuthorList from '../components/AuthorList';
import AuthorForm from '../components/AuthorForm';
import Update from '../components/Update';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const requiresReload = () => {
        setLoaded(false);
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(res=> {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [, loaded]);

    return (
        <div>
            <h1>Favorite Authors</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {loaded && <AuthorList authors={authors} reload={requiresReload}/>}
                    </Route>
                    <Route exact path="/new">
                        <AuthorForm reload={requiresReload}/>
                    </Route>
                    <Route exact path="/edit/:id">
                        <Update reload={requiresReload}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;