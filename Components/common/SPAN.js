import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const SPAN = ({style,title}) => {
  return(
    <p
    style={style} className={styles.SPAN}>{title}</p>
  )
}

export default SPAN