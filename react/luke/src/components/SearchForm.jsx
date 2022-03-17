import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SearchForm = (props) => {
    const [category, setCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [id, setId] = useState("");
    const [idError, setIdError] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        setIdError("");
        setCategoryError("");
        let hasErrors = false;
        if (category === "") {
            setCategoryError("Please select a category");
            hasErrors = true;
        }
        if (id === "") {
            setIdError("Please input an id");
            hasErrors = true;
        }
        if (!hasErrors) {
            const form = {
                category: category,
                id: id
            };
            props.onFormSubmit(form);
            history.push(`/${form.category}/${form.id}`);
            setIdError("");
            setCategoryError("");
        }
    }

    const updateCategory = (e) => {
        setCategory(e.target.value);
    }

    const updateId = (e) => {
        setId(e.target.value);
    }

    return (
        <form onSubmit={search}>
            <label>Search for: </label>
            <select value={category} onChange={updateCategory}>
                <option value="">--- Select a category ---</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID: </label>
            <input type="text" value={id} onChange={updateId} />
            <input type="submit" value="Search" />
            {
                categoryError ? 
                <p style={{color:'red'}}>{categoryError}</p> :
                ''
            }
            {
                idError ? 
                <p style={{color:'red'}}>{idError}</p> :
                ''
            }
        </form>
    );
}

export default SearchForm;