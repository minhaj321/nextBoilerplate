import React from 'react'
import styles from './../../styles/commonComponentStyles/common.module.scss';

const P = ({style,title}) => {
  return(
    <p
    style={style} className={styles.P}>{title}</p>
  )
}

export default P