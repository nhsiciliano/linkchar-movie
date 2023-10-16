"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react"
import { notFound } from 'next/navigation';
import styles from "./page.module.css"
import { PlayCircleIcon, PlusCircleIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button/button";
import axios from "axios";

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.itemOne}>
        <div className={styles.title}>
          <h3>New Trailers</h3>
          <h4>Sort By Today</h4>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.img}
            alt=""
            src="https://s3-alpha-sig.figma.com/img/c7e7/4b5a/f19d4a9244700c49e35db742ecbd41c3?Expires=1698624000&Signature=VgOoKOgtAiye4YjV7cvSVtk5MMY8s3VbX7zIU9HX1hxHTDjqCFMQuC7d2eu1uS8S35u-hvAuahk6pB2gpfsxNx3N-7Vb4aepAaESJakWW6S-hrTsYhtlZGLl2pfymbPA6smwnRxmX2E2nSlCKDvFSFnLtmWhRYvPH5BiiGa16F47z4OYYOhVMm5j9dkg0zkN1aznJ40bZLySvYSCClJYY5IYb4kgOQug3TcdsjwZLT7xplkcu8WPEi9zdqV3AXKSA7ZTJy-j0kitiCculBmY3OvGH5oI4ucipVOpTppKvJoK3HV1bBv0mq~39SbX7qeh8PPvrANeH9N1OYmEvuesLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={294}
            height={150}
          />
          <div className={styles.rectangule}>
            <div className={styles.content}>
              <div className={styles.contentOne}>
                <PlayCircleIcon className={styles.play} />
                <div className={styles.info}>
                  <span className={styles.h1}>Mission Imposible</span>
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
        <div className={styles.image}>
          <Image
            className={styles.img}
            alt=""
            src="https://s3-alpha-sig.figma.com/img/7a55/8b0e/65dd6d681f224465ade5893fc2346abd?Expires=1698019200&Signature=m24KdldCi024YWRto5KaZ4cAiEuzMBZrKnT8Li3o8uibTRPwbaKbDagVeyNwf-tpa26CFLfIZTc8dQww-1ZpQbEw3gSY0t6iqPMU63wcJSjxVxF7AGw9tED6RKfQArsOQtAXkZasWO5e5zpx1qBiqA8SI0K76vxAiWtWqXS3SAS4buekX~WN-7ChGjZOzlposj8G9a~dE8AGhObY6ytZafq8gM4y~1GM0~qtJRLOo-kKCR6uODCcPO1xPMzjvjs2nPA7~iWSlXGG785rR8iNwOKURgqRDFGo4b-mq9wjz1WI0dG9z-2XnDaBAgTuIiQpMJ35AAIxfp7jeio~Va5eBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={294}
            height={150}
          />
          <div className={styles.rectangule}>
            <div className={styles.content}>
              <div className={styles.contentOne}>
                <PlayCircleIcon className={styles.play} />
                <div className={styles.info}>
                  <span className={styles.h1}>Mission Imposible</span>
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
        <div className={styles.imageTitle}>
          <Image
            className={styles.imgTwo}
            alt=""
            src="https://s3-alpha-sig.figma.com/img/5a6f/c4f3/94a1bc0f683809cbd4d43898a8b6f403?Expires=1698019200&Signature=OUkRVNuJ5R7ev5gyoUkKFn--KgKZXQrWKnfnSsCHPvAhdfhTQCI5YRSrnatP0hh1YSCD~1CLaoQ5n78Et1Ink-D6ZbKFm-HmtLP23PtpsCMIdg8LlNXchTT44sevg26A-wLCv0bBVaX8EVp2-O~t5DcHCoUMZDQrqoWcndNFLWGwg0rOplHv81Jxi0X9dY1-ODb0yNoXXZFqmKxbrnqiNnBEk6DxCH7WxsYyciYOPPY3YTan4VbnAJo7jFcJghwo6TIf8~qQjafSOdXLgKXEtnf~BXmIl8Atg6~9Nspgp0ZIpJTl2TS4jO8T~j0KeeUAU1rYM9sFqmeots5nHPN~LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={830}
            height={130}
          />
          <div className={styles.sectitle}>
            <h1>THE OUPOST</h1>
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
          <div className={styles.midimg}>
            <Image
              className={styles.imgThr}
              alt=""
              src="https://s3-alpha-sig.figma.com/img/6b88/4963/8ca97c76d852d6fad76d6eab33f8a459?Expires=1698019200&Signature=od6hj-D8OQR~M-kbErAL~wE55s0Bl9XaZ4pU1IMDCFQG7zw0Y15Sa0ziIAPpiH~a1SsBDlTLDu7rH9leFQP~qPESYLgX7W9ki~Ucz6~OXiWN~2C2j9Thj-VC9WMb-vVQ9XpDWXpSvZMGf21GpBYLwqwpdHB6ZqnRtdw94v3xwkvs4AlcAZP1DraOSbLQV8f~~joXCOF4fudCoeaOiP9tvD54XHoopKVVUhAPgwrM~CLGuGZslBnOOsHPxLw1aeDA91V1zaxsKHqzEghJ9yqV~2mRuIi5aTuM76QefmU9LLBDyl0S5HWQjG4E7ikm6NVi7dGPqg7rlTgQL9e4LcrF7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={830}
              height={130}
            />
            <div className={styles.rectan}>
              <div className={styles.cont}>
                <div className={styles.contentOne}>
                  <PlayCircleIcon className={styles.play} />
                  <div className={styles.info}>
                    <span className={styles.h1}>Mission Imposible</span>
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
          <div className={styles.midimg}>
            <Image
              className={styles.imgThr}
              alt=""
              src="https://s3-alpha-sig.figma.com/img/1584/99df/c69204e2893628d1833f90947317a154?Expires=1698019200&Signature=TxtwGbOqNNPkEMNJpEBE3zzHO4vIZeKbs0CYVcDDdMSURiEEz7QnwdrTpAcsTULt6fuUwzCZ3EaBSbHqwUkJ-llWeGteNDbRjcZO8t05j7bq9EisSkC2LicIbohiKDqvDBuKaxF3wjNdGmjUlkQsqM3~~TT~pFff3otOZmKhMyRwuz4iSVz6EEhURbxD2Zu9EAAat8TcsTZ6ssA~rpXfN4uMSDQ~40uUefcKRJroYPd~27D-VxfbIiQOGhUICPtxE2CEQ1giBy98uGUjW9ovEEUR7z9W03EITLgpRaNyRGFtog8W9Eb94Yxf4CgpMpe4E5Ft3DDXt7kDsj8L9h9VVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={830}
              height={130}
            />
            <div className={styles.rectan}>
              <div className={styles.cont}>
                <div className={styles.contentOne}>
                  <PauseCircleIcon className={styles.play} />
                  <div className={styles.infoTec}>
                    <span className={styles.h2}>32:47</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="6" viewBox="0 0 78 6" fill="none">
                      <rect y="1.56665" width="78" height="3" rx="1.5" fill="#C4C4C4" />
                      <rect x="14" y="1.56665" width="26" height="3" rx="1.5" fill="white" />
                      <rect y="1.56665" width="21" height="3" rx="1.5" fill="#8769FF" />
                      <circle cx="20.6531" cy="3" r="3" fill="white" />
                    </svg>
                    <span className={styles.h2}>02:34:30</span>
                  </div>
                </div>
                <div className={styles.timIcons}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M2.41668 7.18312V1.12728C2.41668 0.983625 2.35961 0.84585 2.25803 0.744268C2.15645 0.642686 2.01867 0.585618 1.87501 0.585618C1.73136 0.585618 1.59358 0.642686 1.492 0.744268C1.39042 0.84585 1.33335 0.983625 1.33335 1.12728V7.18312C1.01964 7.29698 0.748597 7.50467 0.557054 7.77796C0.36551 8.05125 0.262756 8.37689 0.262756 8.71062C0.262756 9.04435 0.36551 9.36999 0.557054 9.64328C0.748597 9.91657 1.01964 10.1243 1.33335 10.2381V10.8773C1.33335 11.0209 1.39042 11.1587 1.492 11.2603C1.59358 11.3619 1.73136 11.419 1.87501 11.419C2.01867 11.419 2.15645 11.3619 2.25803 11.2603C2.35961 11.1587 2.41668 11.0209 2.41668 10.8773V10.2381C2.73039 10.1243 3.00143 9.91657 3.19297 9.64328C3.38452 9.36999 3.48727 9.04435 3.48727 8.71062C3.48727 8.37689 3.38452 8.05125 3.19297 7.77796C3.00143 7.50467 2.73039 7.29698 2.41668 7.18312ZM1.87501 9.25229C1.76788 9.25229 1.66316 9.22052 1.57408 9.161C1.485 9.10148 1.41558 9.01688 1.37458 8.9179C1.33358 8.81893 1.32286 8.71002 1.34376 8.60494C1.36466 8.49987 1.41624 8.40335 1.492 8.3276C1.56775 8.25185 1.66427 8.20026 1.76934 8.17936C1.87441 8.15846 1.98332 8.16919 2.0823 8.21018C2.18128 8.25118 2.26587 8.32061 2.32539 8.40968C2.38491 8.49876 2.41668 8.60349 2.41668 8.71062C2.41668 8.85428 2.35961 8.99205 2.25803 9.09363C2.15645 9.19522 2.01867 9.25229 1.87501 9.25229ZM10 6.54395C9.99907 6.20869 9.89445 5.88193 9.70051 5.60846C9.50656 5.33499 9.23277 5.1282 8.91668 5.01645V1.12728C8.91668 0.983625 8.85961 0.84585 8.75803 0.744268C8.65645 0.642686 8.51867 0.585618 8.37501 0.585618C8.23136 0.585618 8.09358 0.642686 7.992 0.744268C7.89042 0.84585 7.83335 0.983625 7.83335 1.12728V5.01645C7.51964 5.13031 7.2486 5.338 7.05705 5.61129C6.86551 5.88458 6.76276 6.21022 6.76276 6.54395C6.76276 6.87768 6.86551 7.20332 7.05705 7.47661C7.2486 7.7499 7.51964 7.95759 7.83335 8.07145V10.8773C7.83335 11.0209 7.89042 11.1587 7.992 11.2603C8.09358 11.3619 8.23136 11.419 8.37501 11.419C8.51867 11.419 8.65645 11.3619 8.75803 11.2603C8.85961 11.1587 8.91668 11.0209 8.91668 10.8773V8.07145C9.23277 7.9597 9.50656 7.75291 9.70051 7.47944C9.89445 7.20598 9.99907 6.87921 10 6.54395ZM8.37501 7.08562C8.26788 7.08562 8.16316 7.05385 8.07408 6.99433C7.985 6.93481 7.91558 6.85021 7.87458 6.75124C7.83358 6.65226 7.82285 6.54335 7.84376 6.43828C7.86466 6.3332 7.91624 6.23669 7.992 6.16093C8.06775 6.08518 8.16427 6.03359 8.26934 6.01269C8.37441 5.99179 8.48332 6.00252 8.5823 6.04352C8.68128 6.08451 8.76587 6.15394 8.82539 6.24302C8.88491 6.33209 8.91668 6.43682 8.91668 6.54395C8.91668 6.68761 8.85961 6.82539 8.75803 6.92697C8.65645 7.02855 8.51867 7.08562 8.37501 7.08562ZM6.75001 2.21062C6.75085 1.91251 6.66967 1.61992 6.51535 1.36486C6.36103 1.1098 6.13953 0.90211 5.87507 0.764512C5.61062 0.626914 5.31341 0.564714 5.01598 0.584718C4.71854 0.604722 4.43234 0.70616 4.18869 0.877931C3.94505 1.0497 3.75335 1.28518 3.63457 1.55861C3.5158 1.83203 3.47452 2.13286 3.51527 2.42817C3.55602 2.72348 3.67722 3.00189 3.8656 3.23294C4.05398 3.46398 4.30229 3.63875 4.58335 3.73812V10.8773C4.58335 11.0209 4.64042 11.1587 4.742 11.2603C4.84358 11.3619 4.98136 11.419 5.12501 11.419C5.26867 11.419 5.40645 11.3619 5.50803 11.2603C5.60961 11.1587 5.66668 11.0209 5.66668 10.8773V3.73812C5.98277 3.62636 6.25656 3.41958 6.45051 3.14611C6.64445 2.87264 6.74907 2.54588 6.75001 2.21062ZM5.12501 2.75228C5.01788 2.75228 4.91316 2.72052 4.82408 2.661C4.735 2.60148 4.66558 2.51688 4.62458 2.4179C4.58358 2.31893 4.57285 2.21002 4.59376 2.10494C4.61466 1.99987 4.66624 1.90336 4.742 1.8276C4.81775 1.75185 4.91427 1.70026 5.01934 1.67936C5.12441 1.65846 5.23332 1.66919 5.3323 1.71018C5.43128 1.75118 5.51587 1.82061 5.57539 1.90968C5.63491 1.99876 5.66668 2.10349 5.66668 2.21062C5.66668 2.35428 5.60961 2.49205 5.50803 2.59363C5.40645 2.69522 5.26867 2.75228 5.12501 2.75228Z" fill="white" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                    <path d="M7.31303 1.12466C7.31287 1.00999 7.28035 0.897689 7.21922 0.800667C7.15809 0.703645 7.07083 0.625839 6.96746 0.576191C6.86409 0.526543 6.74881 0.507068 6.63487 0.520003C6.52093 0.532939 6.41295 0.577761 6.32334 0.649318L3.44323 2.95292H0.609433C0.447806 2.95292 0.292798 3.01712 0.17851 3.13141C0.0642217 3.2457 1.52588e-05 3.40071 1.52588e-05 3.56234V8.43768C1.52588e-05 8.59931 0.0642217 8.75432 0.17851 8.8686C0.292798 8.98289 0.447806 9.0471 0.609433 9.0471H3.44323L6.32334 11.3507C6.41295 11.4223 6.52093 11.4671 6.63487 11.48C6.74881 11.4929 6.86409 11.4735 6.96746 11.4238C7.07083 11.3742 7.15809 11.2964 7.21922 11.1994C7.28035 11.1023 7.31287 10.99 7.31303 10.8754V1.12466ZM4.0368 4.03768L6.0942 2.39225V9.60776L4.0368 7.96233C3.92893 7.87579 3.79482 7.82851 3.65652 7.82826H1.21885V4.17175H3.65652C3.79482 4.17151 3.92893 4.12423 4.0368 4.03768ZM11 6.00001C11.0009 6.72042 10.8595 7.43391 10.5838 8.09949C10.3081 8.76506 9.90365 9.36959 9.39358 9.87835L8.53187 9.01663C8.92858 8.62091 9.24318 8.15069 9.45758 7.633C9.67197 7.1153 9.78195 6.56034 9.78117 6.00001C9.78188 5.43969 9.67188 4.88474 9.45748 4.36706C9.24309 3.84937 8.92853 3.37915 8.53187 2.98339L9.39358 2.12167C9.90365 2.63042 10.3081 3.23496 10.5838 3.90053C10.8595 4.56611 11.0009 5.2796 11 6.00001Z" fill="white" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M0.714301 6.42857C0.321444 6.42857 1.52588e-05 6.75 1.52588e-05 7.14286V9.28571C1.52588e-05 9.67857 0.321444 10 0.714301 10H2.85716C3.25002 10 3.57144 9.67857 3.57144 9.28571C3.57144 8.89286 3.25002 8.57143 2.85716 8.57143H1.42859V7.14286C1.42859 6.75 1.10716 6.42857 0.714301 6.42857ZM0.714301 3.57143C1.10716 3.57143 1.42859 3.25 1.42859 2.85714V1.42857H2.85716C3.25002 1.42857 3.57144 1.10714 3.57144 0.714286C3.57144 0.321429 3.25002 0 2.85716 0H0.714301C0.321444 0 1.52588e-05 0.321429 1.52588e-05 0.714286V2.85714C1.52588e-05 3.25 0.321444 3.57143 0.714301 3.57143ZM8.57144 8.57143H7.14287C6.75002 8.57143 6.42859 8.89286 6.42859 9.28571C6.42859 9.67857 6.75002 10 7.14287 10H9.28573C9.67859 10 10 9.67857 10 9.28571V7.14286C10 6.75 9.67859 6.42857 9.28573 6.42857C8.89287 6.42857 8.57144 6.75 8.57144 7.14286V8.57143ZM6.42859 0.714286C6.42859 1.10714 6.75002 1.42857 7.14287 1.42857H8.57144V2.85714C8.57144 3.25 8.89287 3.57143 9.28573 3.57143C9.67859 3.57143 10 3.25 10 2.85714V0.714286C10 0.321429 9.67859 0 9.28573 0H7.14287C6.75002 0 6.42859 0.321429 6.42859 0.714286Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.superImg}>
              <div className={styles.circ}>
                <div className={styles.imgBoy}></div>
                <div className={styles.imgGirl}></div>
              </div>
              <div className={styles.friend}>
                <h4>2 viewers</h4>
              </div>
            </div>
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
          <div className={styles.midimg}>
            <Image
              className={styles.imgFg}
              alt=""
              src="https://s3-alpha-sig.figma.com/img/facf/0b41/63a68fbb861cccacacfc40e44a729357?Expires=1698019200&Signature=hco1va9vNy0dTtuj3I63wAi5B-dPrxBQyqZZhJzJrJW5WR0VbuuHu05BNPYe5ZhKoWpUg~q5VP2YmMWKUFf~YEecvK2y1tRurmMhEOZr0dtAEc8Q6~evZE1od150rtFS5S3FiXWEa6WO-YhjEqUoCPIouJRW2vKLwvqDzF2DsckM7ig4jpOWh-cxsky9F6u9P-wA~s~Vu-d3pBwfepDwqnhtSqWan3Z8E1m2fryXjaqXXP-Ta4HA1J2XUry6DRW7VzAZBybuMHEbY4H5H51TmsskE4GJc2IyncksKUdPRqws1fysquhpUeE4TyQ4Fzl-Xbd4KhgbCM6-SPtvhSh43w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={830}
              height={130}
            />
            <div className={styles.rec}>
              <div className={styles.con}>
                <div className={styles.contentOne}>
                  <PlayCircleIcon className={styles.play} />
                  <div className={styles.info}>
                    <span className={styles.h1}>Mission Imposible</span>
                    <span className={styles.h2}>Country: EEUU</span>
                    <span className={styles.h2}>3h ago</span>
                  </div>
                </div>
                <div className={styles.timStar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.16366 0.784732C5.25346 0.508338 5.64449 0.508338 5.73429 0.784731L6.7287 3.84522C6.76887 3.96883 6.88405 4.05251 7.01402 4.05251H10.232C10.5226 4.05251 10.6435 4.4244 10.4083 4.59522L7.80494 6.4867C7.69979 6.5631 7.65579 6.69851 7.69596 6.82211L8.69037 9.8826C8.78017 10.159 8.46383 10.3888 8.22872 10.218L5.62531 8.32653C5.52016 8.25013 5.37779 8.25013 5.27264 8.32653L2.66923 10.218C2.43412 10.3888 2.11777 10.159 2.20758 9.8826L3.20199 6.82211C3.24216 6.69851 3.19816 6.5631 3.09301 6.4867L0.489605 4.59522C0.254491 4.4244 0.375324 4.05251 0.665941 4.05251H3.88393C4.0139 4.05251 4.12908 3.96883 4.16924 3.84522L5.16366 0.784732Z" fill="white" />
                  </svg>
                  <span className={styles.h2}>4.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.midimg}>
            <Image
              className={styles.imgFg}
              alt=""
              src="https://s3-alpha-sig.figma.com/img/ad89/ec80/12024693dff54c3975006d860c4c6846?Expires=1698019200&Signature=ccDrOgJrUXSrEF0~kjmH8yH2Y6i36o4DqFirYSy~ntXh3fuYy2KbVVhdOBY3H2-P~pi-6qfeijQjuQJzbkZxKKXhRk87H7EdaclY48qta3nTpGZCpphlkxJ0PnkngwS8ilaXI9~u9mnxH9X0y3EG3QyreAgSJuF5nSub4x9bzFfFPegQGM1B4bms7zMwHPAVyaExN-um6wxQE8f6q4PE8CTWthSTNB6excRlma88TNLS257993ye4-2Gj5GXwB3-dPmCAJ4OXnHB7C0cDYS3uaE8XnKr93pDg9H0CLW~1ykL8185VlSImCMrJB-mVtKeKjqRWxGJlr2kdnCtDBdJ6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={830}
              height={130}
            />
            <div className={styles.rec}>
              <div className={styles.con}>
                <div className={styles.contentOne}>
                  <PlayCircleIcon className={styles.play} />
                  <div className={styles.info}>
                    <span className={styles.h1}>Mission Imposible</span>
                    <span className={styles.h2}>Country: EEUU</span>
                    <span className={styles.h2}>3h ago</span>
                  </div>
                </div>
                <div className={styles.timStar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.16366 0.784732C5.25346 0.508338 5.64449 0.508338 5.73429 0.784731L6.7287 3.84522C6.76887 3.96883 6.88405 4.05251 7.01402 4.05251H10.232C10.5226 4.05251 10.6435 4.4244 10.4083 4.59522L7.80494 6.4867C7.69979 6.5631 7.65579 6.69851 7.69596 6.82211L8.69037 9.8826C8.78017 10.159 8.46383 10.3888 8.22872 10.218L5.62531 8.32653C5.52016 8.25013 5.37779 8.25013 5.27264 8.32653L2.66923 10.218C2.43412 10.3888 2.11777 10.159 2.20758 9.8826L3.20199 6.82211C3.24216 6.69851 3.19816 6.5631 3.09301 6.4867L0.489605 4.59522C0.254491 4.4244 0.375324 4.05251 0.665941 4.05251H3.88393C4.0139 4.05251 4.12908 3.96883 4.16924 3.84522L5.16366 0.784732Z" fill="white" />
                  </svg>
                  <span className={styles.h2}>4.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.midimg}>
            <Image
              className={styles.imgFg}
              alt=""
              src="https://s3-alpha-sig.figma.com/img/b431/ecc4/eb8c888a15d863a873bd75c12ce78f53?Expires=1698019200&Signature=UAYWXtchGN4i7mBnFGLx7S1aWP8LGfPaLoLZ2wm-N4CYWUSkqVtsjxzkpzUY7WNxxjQTQn6VXbVHA1D1udfB7AkkEpBIhIICMnLersekFil8UQtR6~geFXKtOgYkDMAc4MFnBQJZnBNBPy1gpJKGxfbyxxrqbXLMnDbMv47H2aGz8eu9MazY2WEyscLeKdEXX76nY-XowpybR9ET7FgVgS7edTUZBz~GcNgpBI5atPtzT5YiUMZfwxFA1MrXjQ6KBgR140EWaLbwgeaj9TpzBrMAfQUaMSf9zxr21ER--X1Mjwa9vRU4dOZErcCxG69lzkLMiyguPSzh3~ULSLcWwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={830}
              height={130}
            />
            <div className={styles.rec}>
              <div className={styles.con}>
                <div className={styles.contentOne}>
                  <PlayCircleIcon className={styles.play} />
                  <div className={styles.info}>
                    <span className={styles.h1}>Mission Imposible</span>
                    <span className={styles.h2}>Country: EEUU</span>
                    <span className={styles.h2}>3h ago</span>
                  </div>
                </div>
                <div className={styles.timStar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.16366 0.784732C5.25346 0.508338 5.64449 0.508338 5.73429 0.784731L6.7287 3.84522C6.76887 3.96883 6.88405 4.05251 7.01402 4.05251H10.232C10.5226 4.05251 10.6435 4.4244 10.4083 4.59522L7.80494 6.4867C7.69979 6.5631 7.65579 6.69851 7.69596 6.82211L8.69037 9.8826C8.78017 10.159 8.46383 10.3888 8.22872 10.218L5.62531 8.32653C5.52016 8.25013 5.37779 8.25013 5.27264 8.32653L2.66923 10.218C2.43412 10.3888 2.11777 10.159 2.20758 9.8826L3.20199 6.82211C3.24216 6.69851 3.19816 6.5631 3.09301 6.4867L0.489605 4.59522C0.254491 4.4244 0.375324 4.05251 0.665941 4.05251H3.88393C4.0139 4.05251 4.12908 3.96883 4.16924 3.84522L5.16366 0.784732Z" fill="white" />
                  </svg>
                  <span className={styles.h2}>4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
