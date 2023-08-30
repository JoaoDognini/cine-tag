import styles from './Titulo.module.css';

import React from 'react'

export default function Titulo({ children, texto }) {
    return (
        <div className={styles.texto}> 
            <h1>{texto}</h1>
        </div>
    )
}
