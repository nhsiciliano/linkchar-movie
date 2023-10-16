import Link from 'next/link'
import React from 'react'
import styles from './Button.module.css'

const Button = ({ title, bgColor, url }) => {
    return (
        <Link href={url}>
            <button 
                className={styles.class}
                style={{ backgroundColor: bgColor }}    
            >
                {title}
            </button>
        </Link>
    )
}

export default Button