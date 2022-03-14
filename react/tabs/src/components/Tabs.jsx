import react, {useState} from 'react';
import styles from './Tabs.module.css';

const Tabs = (props) => {
    const setActive = (e) => {
        props.onActiveChange(e.target.value);
    }

    return (
        <div className={styles.tabs}>
            {props.tabs.map((tab, i) => {
                return i == props.activeTab ?
                    <button key={i} className={styles.tabActive} id={i} value={i} onClick={setActive}>Tab {i + 1}</button>
                    : <button key={i} className={styles.tab} id={i} value={i} onClick={setActive}>Tab {i + 1}</button>
            })}
        </div>
    );
}

export default Tabs;