import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const H4 = ({style,title}) => {
  return(
    <h4
    style={style} className={styles.H4}>{title}</h4>
  )
}

export default H4