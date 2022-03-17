import React from 'react';
import {useParams} from 'react-router-dom';

const SearchResults = (props) => {
    const {category, id} = useParams();

    const renderResults = () => {
        if (!props.data)
            return "";
        if (props.data.length === 1 && props.data[0] === "error!")
            return (
                <div>
                    <p>These aren't the droids you're looking for.</p>
                    <img src="https://media2.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif?cid=790b76112a606abcb64266d38d7edb156a52fcad4c443e6c" width="480" height="208" frameBorder="0" alt="Obi-Wan was here"></img>
                </div>
            );
        if (category === "people") {
            return (
                <div>
                    <p><span style={{fontWeight: "bold"}}>Height: </span>{props.data.height} cm</p>
                    <p><span style={{fontWeight: "bold"}}>Mass: </span>{props.data.mass} kg</p>
                    <p><span style={{fontWeight: "bold"}}>Hair Color: </span>{props.data.hair_color} </p>
                    <p><span style={{fontWeight: "bold"}}>Skin Color: </span>{props.data.skin_color} </p>
                </div>
            );
        }
        if (category === "planets") {
            return (
                <div>
                    <p><span style={{fontWeight: "bold"}}>Cliamte: </span>{props.data.climate}</p>
                    <p><span style={{fontWeight: "bold"}}>Terrain: </span>{props.data.terrain}</p>
                    <p><span style={{fontWeight: "bold"}}>Surface Water: </span>{props.data.surface_water === "1" ? "true" : "false"}</p>
                    <p><span style={{fontWeight: "bold"}}>Population: </span>{props.data.population}</p>
                </div>
            );
        }
        // We could fit more categories here if desired
        return "";
    }

    return (
        <div>
            <h1>{props.data.name}</h1>
            {renderResults()}
        </div>
    );
}

export default SearchResults;