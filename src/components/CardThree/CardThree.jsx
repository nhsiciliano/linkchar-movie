import React from 'react'
import styles from "./CardThree.module.css"
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const CardThree = ({ item }) => {
    return (
        <div className={styles.midimg}>
            <img
                className={styles.imgThr}
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <div className={styles.rectan}>
                <div className={styles.cont}>
                    <div className={styles.contentOne}>
                        <PlayCircleIcon className={styles.play} />
                        <div className={styles.info}>
                            <span className={styles.h1}>{item.title}</span>
                            <span className={styles.h2}>Country: EEUU</span>
                            <span className={styles.h2}>3h ago</span>
                        </div>
                    </div>
                    <div className={styles.times}>
                        <span className={styles.h3}>01:29</span>
                    </div>
                </div>
            </div>
            <div className={styles.trend}>
                <h5>#1 Trending 🔥</h5>
            </div>
        </div>
    )
}

export default CardThree