import react, {useState} from 'react';
import styles from './ToDo.module.css';

const ToDo = (props) => {
    console.log(props.list)
    console.log(props.done)

    return (
        <div>
            {props.list.map((item, i) => {
                return <div key={i} className={styles.listItem}>
                        <p className={props.done[i] ? styles.itemDone : styles.item}>{item}</p>
                        <input type="checkbox" checked={props.done[i]} onChange={(e) => props.onItemStatusUpdate(item, !props.done[i])}/>
                        <button value="Delete" onClick={(e) => props.onRemoveItem(item)}>Delete</button>
                    </div> })}
        </div>
    );
};

export default ToDo;