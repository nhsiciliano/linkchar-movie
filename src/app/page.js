"use client"

import React from "react"
import styles from "./page.module.css"
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button/button";
import CardOne from "@/components/CardOne/CardOne";
import CardTwo from "@/components/CardTwo/CardTwo";
import { useFetch, useFetchTwo, useFetchTh, useFetchF, useFetchV } from "@/hooks/useFetch";
import CardThree from "@/components/CardThree/CardThree";
import CardFour from "@/components/CardFour/CardFour";
import CardFive from "@/components/CardFive/CardFive";


export default function Home() {
  const { data, loading, error } = useFetch(`/3/movie/popular?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1`);
  const { movie, loadingt, errort } = useFetchTwo(`/3/movie/popular?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1`);
  const { movs, loadings, errors } = useFetchTh(`/3/movie/popular?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1`);
  const { movsf, loadingr, errorr } = useFetchF(`/3/movie/popular?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1`);
  const { movsv, loadingv, errorv } = useFetchV(`/3/movie/popular?api_key=c02f636a594ac60f26e44c121c6488cc&language=es-ES&page=1`);

  return (
    <div className={styles.container}>
      <div className={styles.itemOne}>
        <div className={styles.title}>
          <h3>New Trailers</h3>
          <h4>Sort By Today</h4>
        </div>
        <div>
          {error
            ? "Something went wrong!"
            : loading
              ? "loading ..."
              : data?.map((item) => <CardOne item={item} key={item.id} />)}
        </div>
        <div className={styles.cover}>
          <h1>Favourites genres</h1>
          <div className={styles.tecla}>
            <Button
              title="Action"
              url="/"
              bgColor="#8769FF"
            />
            <Button
              title="Western"
              url="/"
              bgColor="#F36F45"
            />
            <Button
              title="Adventures"
              url="/"
              bgColor="#8769FF"
            />
            <Button
              title="Drama"
              url="/"
              bgColor="#F36F45"
            />
            <Button
              title="Sci-Fi"
              url="/"
              bgColor="#61D1EA"
            />
          </div>
          <div className={styles.favs}>
            <PlusCircleIcon className={styles.plus} />
            <h5>Add your favourites genres</h5>
          </div>
          <div className={styles.tecla}>
            <Button
              title="Crime"
              url="/"
              bgColor="#262629"
            />
            <Button
              title="Comedy"
              url="/"
              bgColor="#262629"
            />
            <Button
              title="Thriller"
              url="/"
              bgColor="#262629"
            />
          </div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.itemTwo}>
        <div>
          {errort
            ? "Something went wrong!"
            : loadingt
              ? "loading ..."
              : movie?.map((item) => <CardTwo item={item} key={item.id} />)}
        </div>
        <div className={styles.interLine}>
          <div className={styles.getInfo}>
            <h3>Continue Watching</h3>
            <div className={styles.linesep}></div>
            <h4>4 Movies</h4>
          </div>
          <div className={styles.getMovie}>
            <h4>All Movies</h4>
            <h4>{'>'}</h4>
          </div>
        </div>
        <div className={styles.mainmid}>
          <div>
            {errors
              ? "Something went wrong!"
              : loadings
                ? "loading ..."
                : movs?.map((item) => <CardThree item={item} key={item.id} />)}
          </div>
          <div>
            {errorr
              ? "Something went wrong!"
              : loadingr
                ? "loading ..."
                : movsf?.map((item) => <CardFour item={item} key={item.id} />)}
          </div>
        </div>
        <div className={styles.interLine}>
          <div className={styles.getInfo}>
            <h3>Popular Movies 2021</h3>
          </div>
          <div className={styles.getMovie}>
            <h4>All Movies</h4>
            <h4>{'>'}</h4>
          </div>
        </div>
        <div className={styles.mainmid}>
          <div style={{ display: "flex", gap: "20px" }}>
            {errorv
              ? "Something went wrong!"
              : loadingv
                ? "loading ..."
                : movsv?.map((item) => <CardFive item={item} key={item.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
