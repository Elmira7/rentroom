import React from "react"
import styles from "./AboutYou.module.sass"

export const AboutYou = () => {
	return (
		<div className={styles.main__first}>
			<div className={styles.main__first__block}>
				<div className={styles.main__first__block__one}>Делаем ваш бизнес проще</div>
				<div className={styles.main__first__block__second}>Cервис автоматизации аренды для крупных
                    предпринимателей и частных лиц
				</div>
				<div className={styles.main__first__block__button}>
					<button type={"button"} className={styles.main__first__block__button__but}>Начать работу</button>
				</div>
			</div>

			<div>
				<img className={styles.main__first__img} alt={"girl_in_work"} src={"/images/girl_in_work.png"}/>
			</div>
		</div>
	)
}