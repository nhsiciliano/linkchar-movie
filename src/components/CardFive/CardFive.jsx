import React from 'react'
import styles from "./CardFive.module.css"
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const CardFive = ({ item }) => {
    return (
        <div className={styles.midimg}>
            <img
                className={styles.imgFg}
                alt=""
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
            <div className={styles.rec}>
                <div className={styles.con}>
                    <div className={styles.contentOne}>
                        <PlayCircleIcon className={styles.play} />
                        <div className={styles.info}>
                            <span className={styles.h1}>{item.title}</span>
                            <span className={styles.h2}>Country: EEUU</span>
                            <span className={styles.h2}>3h ago</span>
                        </div>
                    </div>
                    <div className={styles.timStar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M5.16366 0.784732C5.25346 0.508338 5.64449 0.508338 5.73429 0.784731L6.7287 3.84522C6.76887 3.96883 6.88405 4.05251 7.01402 4.05251H10.232C10.5226 4.05251 10.6435 4.4244 10.4083 4.59522L7.80494 6.4867C7.69979 6.5631 7.65579 6.69851 7.69596 6.82211L8.69037 9.8826C8.78017 10.159 8.46383 10.3888 8.22872 10.218L5.62531 8.32653C5.52016 8.25013 5.37779 8.25013 5.27264 8.32653L2.66923 10.218C2.43412 10.3888 2.11777 10.159 2.20758 9.8826L3.20199 6.82211C3.24216 6.69851 3.19816 6.5631 3.09301 6.4867L0.489605 4.59522C0.254491 4.4244 0.375324 4.05251 0.665941 4.05251H3.88393C4.0139 4.05251 4.12908 3.96883 4.16924 3.84522L5.16366 0.784732Z" fill="white" />
                        </svg>
                        <span className={styles.h2}>{item.vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFive