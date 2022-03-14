import React, {useState} from 'react';

const ListEntry = (props) => {
    const [item, setItem] = useState("");

    const updateItem = (e) => {
        setItem(e.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        props.onNewItem(item);
        setItem("");
    }

    return (
        <div className="form">
            <form onSubmit={addItem}>
                <div>
                    <input type="text" onChange={updateItem} value={item} />
                </div>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default ListEntry;