import React from "react";
import styles from "./CardOne.module.css"
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const CardOne = ({ item }) => {
    return (
        <div className={styles.image}>
            <img
                className={styles.img}
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <div className={styles.rectangule}>
                <div className={styles.content}>
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
        </div>
    )
};

export default CardOne;
