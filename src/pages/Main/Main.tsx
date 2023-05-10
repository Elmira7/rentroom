import React from "react"
import styles from "./main.module.sass"
import girl_in_work from "../../images/girl_in_work.png"
import laptop from "../../images/img.png"
import {AboutUs} from "./AboutUs"
import {Cooperation} from "./Cooperation"
import {Advantages} from "./Advantages"
import {Partners} from "./Partners"

export const Main = () => {
	return (
		<div className={styles.main}>
			<AboutUs/>
			<Cooperation/>
			<Advantages/>
			<Partners/>
			{/*<div className={styles.main__second}>*/}
			{/*	<div>*/}
			{/*		<p>Все под контролем</p>*/}
			{/*		<p>Удобный доступ к объектам и инструментам для работы</p>*/}
			{/*	</div>*/}
			{/*	<div>*/}

			{/*		/<img alt={"laptop"} src={laptop}/>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	)
}