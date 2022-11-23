import React from 'react';
import styles from './ModuleStyle.module.css';

const ModuleStyle = () => {
    return (
        <>
          <h2>Module Style Option</h2>  
          <p className={styles.error}>Coming from the css module file.</p>
        </>
    );
}

export default ModuleStyle;
