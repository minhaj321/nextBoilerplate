import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const H2 = ({style,title}) => {
  return(
    <h2
    style={style} className={styles.H2}>{title}</h2>
  )
}

export default H2