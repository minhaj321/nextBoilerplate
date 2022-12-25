import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const BUTTON = ({style,title}) => {

    return (
    <button className={styles.BUTTON}
    style={style}
    >{title}</button>
  )
}

export default BUTTON