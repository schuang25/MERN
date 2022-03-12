import React, {useState} from 'react';

const AddBox = (props) => {
    const [color, setColor] = useState("");

    const updateColor = (e) => {
        setColor(e.target.value);
    };

    const addBox = (e) => {
        e.preventDefault();
        props.onNewBox(color);
        setColor("");
    }

    return (
        <div className="form">
            <form onSubmit={addBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={updateColor} value={color} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBox;