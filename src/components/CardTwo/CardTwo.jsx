import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import styles from "./CardTwo.module.css"

const CardTwo = ({ item }) => {
    return (
        <div className={styles.imageTitle}>
            <img
                className={styles.imgTwo}
                alt=""
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
            <div className={styles.sectitle}>
                <h1>{item.title}</h1>
            </div>
            <div className={styles.buttonPost}>
                <PlayCircleIcon className={styles.playTwo} />
                <h3>Watch Now</h3>
            </div>
            <div className={styles.superImg}>
                <div className={styles.circ}>
                    <div className={styles.imgBoy}></div>
                    <div className={styles.imgGirl}></div>
                </div>
                <div className={styles.friend}>
                    <h4>+2 friends are watching</h4>
                </div>
            </div>
        </div>
    );
};

export default CardTwo;
