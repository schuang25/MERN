import react, {useState} from 'react';
import styles from './Boxes.module.css';

const Boxes = (props) => {
    console.log(props.boxList);
    props.boxList.map((box, i) => console.log(box));
    return (
        <div className={styles.boxes}>
            {props.boxList.map((box, i) => {
                const boxStyle={
                    backgroundColor: box
                };
                return <div key={i} className={styles.box} style={boxStyle}/> })}
        </div>
    );
};

export default Boxes;