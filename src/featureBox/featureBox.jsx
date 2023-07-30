import React from 'react'
import styles from './featBox.module.css'

function FeatureBox({text,desc,children}) {
  return (
    <div className={styles.feature}>
              {children}
              <p className={styles.heading}>{text}</p>
              <p className={styles.text}>
                {desc}
              </p>
          </div>
  )
}

export default FeatureBox