import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const H3 = ({style,title}) => {
  return(
    <h3
    style={style} className={styles.H3}>{title}</h3>
  )
}

export default H3