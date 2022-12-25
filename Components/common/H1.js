import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const H1 = ({style,title}) => {
  return(
    <h1 
    style={style}
    className={styles.H1}>{title}</h1>
  )
}

export default H1